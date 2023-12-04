import React, { useState, useEffect } from 'react';
import './update.css'

const UpdateProfile = () => {
  const [userData, setUserData] = useState({
    nombre: '',
    email: '',
    discapacidad: '',
    telefono: '',
  });

  useEffect(() => {
    // Aquí puedes cargar los datos del usuario desde localStorage o tu API
    const storedUserData = JSON.parse(localStorage.getItem('usuario'));

    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes enviar los datos actualizados a tu API o almacenarlos en localStorage
    localStorage.setItem('usuario', JSON.stringify(userData));

    // Puedes redirigir a otra página o realizar otras acciones después de la actualización
    // window.location.href = '/perfil'; // Cambia esto según tu enrutamiento
  };

  return (
    <div className="contenedor">
      <h1>Actualizar Datos de Usuario</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={userData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />

        <label htmlFor="discapacidad">Discapacidad:</label>
        <input
          type="text"
          id="discapacidad"
          name="discapacidad"
          value={userData.discapacidad}
          onChange={handleChange}
        />

        <label htmlFor="telefono">Teléfono del representante:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={userData.telefono}
          onChange={handleChange}
        />

        <button type="submit">Actualizar Datos</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
