import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import axios from 'axios';
import './css/login.css';

const Login = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/auth/login", {
          email,
          password
      });
      console.log(response.data);
      alert("Login realizado com sucesso!");
      navigate('/');
    } catch (error) {
      console.error("Erro ao enviar os dados: ", error);
      alert("Houve um problema com o login.");
    }
  };

  return (
    <main id="container">
      <form id="login_form" onSubmit={handleSubmit}>
        <div id="form_header">
          <h1>Login</h1>
        </div>

        <div id="inputs">

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
