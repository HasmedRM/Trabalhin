import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './css/acervo.css';
import './css/principal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Acervo() {
  const [sidebarVisible, setSidebarVisible] = useState(true); // Estado para controlar a visibilidade da sidebar

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible); // Alterna a visibilidade da sidebar
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="text-white d-flex justify-content-between align-items-center py-3 px-4">
        <div className="d-flex align-items-center col-1">
          <button 
            type="button" 
            className="btn" 
            id="toggleButton" 
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} size="3x" />
          </button>
          <div className="logo">
            <img 
              src="https://cdn.discordapp.com/attachments/1216857927747371061/1282115038949408790/lw-logo.png?ex=66de2e2d&is=66dcdcad&hm=1a695010346ed6efa40e3ea4891e9996a4ee24a5cfa90d8008a6c4c271270678&"
              alt="Logo" 
            />
          </div>
        </div>
        <div className="search-bar">
          <form className="d-flex">
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Buscar" 
              aria-label="Buscar" 
            />
            <button className="btn btn-outline-light border border-light" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </header>

      <div className="d-flex flex-grow-1">
        <nav className={`sidebar p-3${sidebarVisible ? '' : ' d-none'}`} id="sidebar" style={{ minWidth: '200px' }}>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="#">Acervo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/configuracoes">Configurações</Link>
            </li>
            <li>
              <Link to="/login" className="btn btn-outline-light border border-light mt-3">Login</Link>
            </li>
          </ul>
        </nav>

        <main className="content flex-grow-1 p-4">
          <div className="container-acervo mt-2">
            <h2>Catálogo de Livros</h2>
            <p>Confira nossos lançamentos futuros e faça o download.</p>
            <div className="row">
              {[
                { id: 1, title: 'Título do Livro 1', category: 'Ficção' },
                { id: 2, title: 'Título do Livro 2', category: 'Não-Ficção' },
                { id: 3, title: 'Título do Livro 3', category: 'Romance' },
                { id: 4, title: 'Título do Livro 4', category: 'Aventura' },
              ].map((book) => (
                <div key={book.id} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="card shadow-sm">
                    <img 
                      src="https://via.placeholder.com/150" 
                      className="card-img-top" 
                      alt="Capa do Livro" 
                    />
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                      <p className="card-category">Categoria: {book.category}</p>
                      <Link to={`/livro/${book.id}`} className="btn btn-acervo-primary">Ver mais</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p>&copy; 2024 Virtual Bookshelf. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Acervo;
