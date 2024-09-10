import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar o useNavigate
import axios from "axios";
import "./css/cadastro.css";

const Cadastro = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Inicializar o hook useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
          name,
          email,
          password
      });
      console.log(response.data);
      alert("Cadastro realizado com sucesso!");
      navigate('/login')
    } catch (error) {
      console.error("Erro ao enviar os dados: ", error);
      alert("Houve um problema com o cadastro.");
    }
  };

  return (
    <div className="gradient">
      <div className="container">
        <div className="content-cadastro first-content">
          <div className="first-column">
            <h2 className="title title-primary">Bem vindo de Volta!</h2>
            <p className="description description-primary">Se você já é leitor</p>
            <p className="description description-primary">
              Faça o login com sua conta
            </p>
            <button
              id="signin"
              className="btn btn-primary"
              onClick={() => navigate("/login")} // Usar o navigate para ir para a tela de login
            >
              Login
            </button>
          </div>

          <div className="second-column">
            <h2 className="title title-second">Criar Conta</h2>

            <p className="description description-second">
              ou utilize seu email para fazer o cadastro
            </p>

            <form className="form" onSubmit={handleSubmit}>
              <label className="label-input">
                <i className="far fa-user icon-modify"></i>
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>

              <label className="label-input">
                <i className="far fa-envelope icon-modify"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>

              <label className="label-input">
                <i className="fas fa-lock icon-modify"></i>
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>

              <button className="btn btn-second btn-left" type="submit">
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
