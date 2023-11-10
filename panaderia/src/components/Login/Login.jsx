import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    idUsuario: '',
    passw: '',
  });

  const [errorLogin, setErrorLogin] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here using formData.idUsuario and formData.passw
    // For example, you can use an API call to authenticate the user
    // If login fails, set setErrorLogin to true
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img src="favicon.ico" alt="" />
      </div>
      <div className="text-center mt-2 name">Pharma App</div>
      <div className="text-center mt-2 name">Sign in</div>
      <form id="frmLogin" onSubmit={handleSubmit} className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"> </span>
          <img src="assets/images/escaneo-facial.jpg" alt="" />
          <input
            type="text"
            id="idUsuario"
            className="form-control"
            placeholder="Id Usuario"
            name="idUsuario"
            value={formData.idUsuario}
            onChange={handleInputChange}
          />
        </div>

        <div className="alert alert-danger">
          {formData.idUsuario === '' && <div>User</div>}
        </div>

        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <img src="assets/images/tarjeta-clave.jpg" alt="" />
          <input
            type="password"
            id="passw"
            className="form-control"
            placeholder="Password"
            name="passw"
            value={formData.passw}
            onChange={handleInputChange}
          />
        </div>
        {errorLogin && (
          <div className="alert alert-danger">Usuario o Contraseña no válido</div>
        )}

        <button
          type="submit"
          className="btn mt-3"
          disabled={formData.idUsuario === '' || formData.passw === ''}
        >
          Login
        </button>
      </form>
      <div className="text-center fs-6">
        <a href="/forgot-password">Forget password?</a> or <a href="/register">Sign up</a>
      </div>
    </div>
  );
};

export default Login;
