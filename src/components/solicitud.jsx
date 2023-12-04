import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './solicitud.css'

const SolicitudSeguimiento = () => {
  const [nombresol, setNombresol] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [documento, setDocumento] = useState(null);
  const [mensajeExito, setMensajeExito] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const solicitudseg = {
      nombresol: nombresol,
      descripcion: descripcion,
      documento: documento
    };

    localStorage.setItem('solicitudseg', JSON.stringify(solicitudseg));
    setNombresol('');
    setDescripcion('');
    setDocumento(null);

    setMensajeExito('Solicitud enviada con éxito. ¡Gracias!');
    setTimeout(() => {
      setMensajeExito('');
    }, 3000);
    navigate("/")
    // Aquí puedes manejar la redirección o navegación como lo haces en window.location.href = 'home.html';
  };

  return (
    <>
    <div className="contenedor">
      <h1>Solicitud de Seguimiento de Estudiante Discapacitado</h1>
      <form id="solicitud-form" encType="multipart/form-data" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre del Estudiante:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          value={nombresol}
          onChange={(e) => setNombresol(e.target.value)}
        />

        <label htmlFor="descripcion">Descripción de la Discapacidad:</label>
        <textarea
          id="descripcion"
          name="descripcion"
          rows="4"
          required
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>

        <label htmlFor="documento">Adjuntar Documento (Informe Médico, etc.):</label>
        <input
          type="file"
          id="documento"
          name="documento"
          accept=".pdf, .doc, .docx"
          required
          onChange={(e) => setDocumento(e.target.files[0])}
        />

        <button type="submit">Enviar Solicitud</button>
        <div id="mensaje-exito">{mensajeExito}</div>
      </form>
    </div>
    </>
  );
};

export default SolicitudSeguimiento;
