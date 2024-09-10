import React, { useState } from 'react';
import axios from 'axios';
import './css/livroADM.css';

const CadastroLivro = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    pdf: null,
    cover_image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleFileChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     pdf: e.target.file[0],
  //     cover_image: e.target.file,
  //   });
  // };
  const handleFileChange = (e) => {
    const { name, files } = e.target;

    // Verifica se arquivos estão presentes e processa conforme o nome
    if (files && files.length > 0) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('title', formData.title);
    data.append('author', formData.author);
    if (formData.pdf) {
      data.append('pdf', formData.pdf);
    } 
    if (formData.cover_image) {
      data.append('cover_image', formData.cover_image);
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/books', data, {
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
          <label htmlFor="titulo">Título do Livro</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Autor</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="pdf">Carregar Arquivo</label>
          <input
            type="file"
            id="pdf"
            name="pdf"
            onChange={handleFileChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cover_image">Carregar Capa</label>
          <input
            type="file"
            id="cover_image"
            name="cover_image"
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
