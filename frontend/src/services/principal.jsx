import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/principal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Principal = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true); // Estado para controlar a visibilidade da sidebar

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible); // Alterna a visibilidade da sidebar
  };

  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <div className="d-flex">
        {sidebarVisible && <Sidebar />} {/* Mostra a sidebar apenas se sidebarVisible for true */}
        <Content sidebarVisible={sidebarVisible} /> {/* Passa sidebarVisible para o Content */}
      </div>
      <Footer />
    </div>
  );
};

const Header = ({ toggleSidebar }) => (
  <header className="text-white d-flex justify-content-between align-items-center py-3 px-4">
    <div className="d-flex align-items-center col-1">
    <button type="button" className="btn" id="toggleButton" onClick={toggleSidebar}>
      <FontAwesomeIcon icon={faBars} size="3x" />
    </button>
      <div className="logo">
        <img src="https://cdn.discordapp.com/attachments/1216857927747371061/1282115038949408790/lw-logo.png?ex=66de2e2d&is=66dcdcad&hm=1a695010346ed6efa40e3ea4891e9996a4ee24a5cfa90d8008a6c4c271270678&" 
        alt="Logo" />
      </div>
    </div>
    <div className="search-bar">
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
        <button className="btn btn-outline-light border border-light" type="submit">Buscar</button>
      </form>
    </div>
  </header>
);

const Sidebar = () => (
  <div className="sidebar" id="sidebar">
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/acervo">Acervo</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/configuracoes">Configurações</Link>
      </li>
      <li>
        <Link to="/login" className="btn btn-outline-light border border-light mt-3">Login</Link>
      </li>
    </ul>
  </div>
);

const Content = ({ sidebarVisible }) => (
  <div className={`content ${sidebarVisible ? '' : 'full-width'}`} id="content">
    <div id="carouselExampleCaptions" className="carousel slide mt-3" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://media.discordapp.net/attachments/1216857927747371061/1282813759596920852/leitura.png?ex=66e0b8e9&is=66df6769&hm=e51ed07b3a5649e89cbe64e45b7359422d23260866478a08a9444c2240fbecfe&=&format=webp&quality=lossless&width=1025&height=416" className="d-block w-100" alt="Slide 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
          </div>
        </div>n
        <div className="carousel-item">
          <img src="https://cdn.discordapp.com/attachments/1216857927747371061/1282822977892647022/Las-bibliotecas-publicas-son-un-servicio-necesario-para-la-ciudadania.png?ex=66e0c17f&is=66df6fff&hm=47aed1421eae1f79211d5a66274465d6af2c55ed9e520ba9b7f2da5e53c1eded&" className="d-block w-100" alt="Slide 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://cdn.discordapp.com/attachments/1216857927747371061/1282824401204678766/prestamo-digital-de-libros-4.png?ex=66e0c2d2&is=66df7152&hm=7bcb1bafc4d2dd14fcf53c5054eee94f45ead35a9ad4f78f3b598de496ae172a&" className="d-block w-100" alt="Slide 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5></h5>
            <p></p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <div className='texto-div'>
      <p className='texto1'>
      A VirtualBookShelf é uma biblioteca virtual com o propósito de levar a leitura a todos
      </p>
      <p className='texto2'>
      Com a crença firme de que o conhecimento deve estar acessível a todos, a VirtualBookShelf oferece uma vasta coleção de livros digitais para leitores de todas as idades e origens. Ao utilizar a tecnologia para criar um espaço inclusivo e livre, a biblioteca virtual permite que qualquer pessoa, em qualquer lugar, tenha acesso a uma rica variedade de materiais literários e educacionais. Com a missão de promover a cultura e a educação de forma descomplicada e equitativa, a VirtualBookShelf se estabelece como um ponto de encontro virtual para aqueles que desejam explorar, aprender e se inspirar através da leitura.
      </p>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-dark text-white text-center py-3 mt-auto">
    <p>&copy; 2024 Virtual Bookshelf. Todos os direitos reservados.</p>
  </footer>
);

export default Principal;
