import React, { useState } from 'react';
import Footer from "../Footer";
import NavMenu from "../NavMenu";

const Register = () => {
  // Estados para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    files: [],
  });

  // Função para manipular a mudança nos campos de entrada
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para lidar com a mudança de arquivos
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, files });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com o envio do formulário
    // Por exemplo, enviar os dados para o backend para registro
    console.log(formData);
  };

  return (
    <div className="home">
      <NavMenu />
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="username">Nome de Usuário:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="files">Upload de Arquivo (PDF):</label>
              <input
                type="file"
                id="files"
                name="files"
                accept=".pdf"
                multiple
                onChange={handleFileChange}
              />
            </div>
            <div className="buttons">
              <button type="submit">Registrar</button>
              <button type="reset">Limpar</button>
            </div>
          </form>
        </div>
      <Footer />
    </div>
  );
};

export default Register;
