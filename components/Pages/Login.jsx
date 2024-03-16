import React, { useState } from "react";
import Footer from "../Footer";
import LoginMain from "../LoginMain";
import NavMenu from "../NavMenu";

const Login = () => {
  // Estado para armazenar as credenciais do usuário
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  // Função para lidar com a mudança nos campos de entrada
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de autenticação
    console.log("Credenciais enviadas:", credentials);
    // Exemplo de como limpar o formulário após o envio
    setCredentials({ email: "", password: "" });
  };

  return (
    <div className="home">
      <NavMenu />
      <LoginMain>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              value={credentials.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Digite sua senha"
              value={credentials.password}
              onChange={handleInputChange}
            />
            <div className="buttons">
              <button type="submit">Login</button>
              <button type="reset">Limpar</button>
            </div>
          </form>
        </div>
      </LoginMain>
      <Footer />
    </div>
  );
};

export default Login;