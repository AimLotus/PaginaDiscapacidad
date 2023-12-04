import React, { useState } from "react";
import "./register.css";
const Register = () => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/;
  const [dataInputs, setDataInputs] = useState({
    name: "",
    apellido:"",   
    date: "",
    email: "",
    usertype: "",
    genero: "",
    password: "",
    confirm: "",
    ci:"",
    discapacidad:"",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataInputs({ ...dataInputs, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataInputs);
    if (!regex.test(dataInputs.password)) {
      alert(
        "la contraseña debe contener minimo 8 caracteres, maximo 15, al menos un digito numerico, al menos un simbolo, al menos una letra en mayuscula"
      );
      
    } 
    if ( dataInputs.password !== dataInputs.confirm) {
      alert(
        "Las contraseñas no coinciden"
      )
    }
    else {
      localStorage.setItem("data", JSON.stringify(dataInputs));
      alert("datos almacenados, ya puedes iniciar sesion");
    }
  };

  return (
    <main>
      <div className="contenedor">
        <h1>Registrarse</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombres</label>
            <input type="text" required name="name" id="name" placeholder="Nombres" value={dataInputs.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="apellidos">Apellidos</label>
            <input type="text" required name="apellido" id="apellido" placeholder="Apellidos" value={dataInputs.apellido} onChange={handleChange}/>
          </div>
          <div>
          <label htmlfor="user-type">Seleccione el tipo de usuario:</label>
            <select id="usertype" name="usertype" value={dataInputs.usertype} onChange={handleChange} >
                <option value="alumno">Alumno</option>
                <option value="docente">Docente</option>
            </select>
            </div>
            <div>
            <label htmlfor="genero">Elija el genero:</label>
            <select id="genero" name="genero" value={dataInputs.genero} onChange={handleChange}>
                <option value="" disabled selected>Seleccionar</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro...</option>
            </select>
            </div>
          <div>
            <label htmlFor="date">Fecha de nacimiento</label>
            <input type="date" required name="date" id="date" value={dataInputs.date} onChange={handleChange}/>
          </div>
          
          <div>
            <label htmlFor="email">Correo Electronico</label>
            <input type="email" required name="email" id="email" value={dataInputs.email} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="ci">Cedula de identidad</label>
            <input type="text" required name="ci" id="ci" value={dataInputs.ci} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="discapacidad">Tipo de discapacidad</label>
            <input type="text" required name="discapacidad" id="discapacidad" value={dataInputs.discapacidad} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="password">Contraseña</label>
            <input type="password" required name="password" id="password" value={dataInputs.password} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="confirm">Confirmar contraseña</label>
            <input type="password" required name="confirm" id="confirm" value={dataInputs.confirm} onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor=""></label>
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </main>
  );
};

export default Register