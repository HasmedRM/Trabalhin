import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/config.css';
import './css/principal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Configuracoes() {
  const [sidebarVisible, setSidebarVisible] = useState(true); // Estado para controlar a visibilidade da sidebar

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible); // Alterna a visibilidade da sidebar
  };

  return (
    <div>
      <header className=" text-white d-flex justify-content-between align-items-center py-3 px-4">
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

      <div className="d-flex">
        {/* Condicional para visibilidade da sidebar */}
        <div className={`sidebar ${sidebarVisible ? '' : 'd-none'}`} id="sidebar">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/acervo">Acervo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/configuracoes">Configurações</Link>
            </li>
            <li>
              <Link className="btn btn-outline-light border border-light mt-3" to="/login">Login</Link>
            </li>
          </ul>
        </div>

        <div className="content p-4">
          <h2>Configurações da Conta</h2>
          <form className="mt-4 d-flex flex-column align-items-center">
            <div className="mb-3 w-50 text-center">
              <label htmlFor="username" className="form-label d-block text-start">Nome de Usuário</label>
              <input type="text" className="form-control mx-auto" id="username" placeholder="Seu nome de usuário" />
            </div>
            <div className="mb-3 w-50 text-center">
              <label htmlFor="email" className="form-label d-block text-start">Endereço de Email</label>
              <input type="email" className="form-control mx-auto" id="email" placeholder="Seu email" />
            </div>
            <div className="mb-3 w-50 text-center">
              <label htmlFor="password" className="form-label d-block text-start">Nova Senha</label>
              <input type="password" className="form-control mx-auto" id="password" placeholder="Digite uma nova senha" />
            </div>
            <div className="mb-3 w-50 text-center">
              <label htmlFor="confirmPassword" className="form-label d-block text-start">Confirmar Nova Senha</label>
              <input type="password" className="form-control mx-auto" id="confirmPassword" placeholder="Confirme sua nova senha" />
            </div>
            <button type="submit" className="btn btn-config-primary">Salvar Alterações</button>
          </form>
        </div>
      </div>

      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p>&copy; 2024 Virtual Bookshelf. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Configuracoes;
