import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <button type="button" className="btn btn-outline-light btn-lg me-3 p-1" id="toggleButton" onClick={toggleSidebar}>
      <FontAwesomeIcon icon={faBars} size="4x" />
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
          <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Slide 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Primeiro Slide</h5>
            <p>Descrição do primeiro slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Slide 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Segundo Slide</h5>
            <p>Descrição do segundo slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://via.placeholder.com/800x400" className="d-block w-100" alt="Slide 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Terceiro Slide</h5>
            <p>Descrição do terceiro slide.</p>
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
  </div>
);

const Footer = () => (
  <footer className="bg-dark text-white text-center py-3 mt-auto">
    <p>&copy; 2024 Virtual Bookshelf. Todos os direitos reservados.</p>
  </footer>
);

export default Principal;
