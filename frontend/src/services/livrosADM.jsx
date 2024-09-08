import React, { useState } from 'react';
import axios from 'axios';
import './css/livroADM.css';

const CadastroLivro = () => {
  const [formData, setFormData] = useState({
    codigo: '',
    titulo: '',
    editora: '',
    classificacao: '',
    dataCadastro: '',
    arquivo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      arquivo: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('codigo', formData.codigo);
    data.append('titulo', formData.titulo);
    data.append('editora', formData.editora);
    data.append('classificacao', formData.classificacao);
    data.append('dataCadastro', formData.dataCadastro);
    if (formData.arquivo) {
      data.append('arquivo', formData.arquivo);
    }

    try {
      const response = await axios.post('https://sua-api.com/api/cadastro-livros', data, {
        headers: {
          'Content-Type': 'multipart/form-data', // Cabeçalho para envio de arquivos
        },
      });

      console.log(response.data);
      alert('Livro cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar os dados: ', error);
      alert('Houve um problema com o cadastro.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="codigo">Código do Livro</label>
          <input
            type="text"
            id="codigo"
            name="codigo"
            value={formData.codigo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="titulo">Título do Livro</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="editora">Editora</label>
          <input
            type="text"
            id="editora"
            name="editora"
            value={formData.editora}
            onChange={handleChange}
          />
          <label htmlFor="classificacao">Categoria</label>
          <input
            type="text"
            id="classificacao"
            name="classificacao"
            value={formData.classificacao}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="arquivo">Carregar Arquivo</label>
          <input
            type="file"
            id="arquivo"
            name="arquivo"
            onChange={handleFileChange}
          />
        </div>

        <div className="form-group">
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
};

export default CadastroLivro;
