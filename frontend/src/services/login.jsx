import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import axios from 'axios';
import './css/login.css';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const loginData = { name, email, password };
    const apiUrl = process.env.REACT_APP_API_URL; 

    axios.post(`${apiUrl}/auth/login`, loginData)
      .then((response) => {
        console.log('Login bem-sucedido:', response.data);
        alert('Login bem-sucedido!');
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error('Erro ao realizar o login:', error);
        alert('Erro ao realizar o login. Verifique as informações e tente novamente.');
      });
  };

  return (
    <main id="container">
      <form id="login_form" onSubmit={handleSubmit}>
        <div id="form_header">
          <h1>Login</h1>
        </div>

        <div id="inputs">
          <div className="input-box">
            <label htmlFor="name">Nome</label>
            <div className="input-field">
              <i className="far fa-user icon-modify"></i>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="input-box">
            <label htmlFor="email">E-mail</label>
            <div className="input-field">
              <i className="far fa-envelope icon-modify"></i>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="input-box">
            <label htmlFor="password">Senha</label>
            <div className="input-field">
              <i className="fas fa-lock icon-modify"></i>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          
          <div id="forgot_password">
            <Link to="/recuperar-senha">Esqueci minha senha</Link> {/* Atualizado para corresponder à rota */}
          </div>

          <div id="create-account">
            <Link to="/cadastro">Criar conta agora</Link> {/* Usar Link para navegação */}
          </div>
        </div>

        <button type="submit" id="login_button">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
