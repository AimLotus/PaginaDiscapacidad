// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'

const Login = ({ setToken }) => {
  const [dataInputs, setDataInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    // Aquí deberías realizar una solicitud al servidor para autenticar las credenciales
    // y obtener un token. Puedes usar bibliotecas como axios para hacer solicitudes HTTP.
    // En este ejemplo, simularemos la autenticación exitosa y generación de token.
    const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
    setToken(fakeToken);

    // Redirigir a la página principal después del inicio de sesión
    navigate("/");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataInputs({ ...dataInputs, [name]: value });
  };

  const handleSubmit = (e) => {
		e.preventDefault();
		if(localStorage.length === 0) {
			return alert("no existen datos almacenados")
		}
		const { email, password } = JSON.parse(localStorage.getItem("data"))
		console.log(email, password)

		if( dataInputs.email == email && dataInputs.password == password) {
			alert("sesion iniciada");
			navigate("/");
		} else {
		  alert("datos incorrectos")
		}
  };
  return (
    <main>
      <div className="contenedor">
        <h1>Iniciar Sesion</h1>
        <form onSubmit={handleSubmit}>
        <div className="form-card">
            <label htmlFor="email">Correo Electronico</label>
            <input
              type="email"
              required
              name="email"
              id="email"
              placeholder="correo electronico"
              onChange={handleChange}
              value={dataInputs.email}
            />
          </div>
          <div className="form-card">
            <label htmlFor="email">Contraseña</label>
            <input
              type="password"
              required
              name="password"
              id="password"
              placeholder="contraseña"
              onChange={handleChange}
              value={dataInputs.password}
            />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </main>
  );
};

export default Login;
