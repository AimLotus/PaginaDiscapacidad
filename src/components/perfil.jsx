// LocalStoragePage.jsx
import React, { useEffect, useState } from "react";
import './perfil.css'

const Perfil = () => {
  const [localStorageData, setLocalStorageData] = useState(null);

  useEffect(() => {
    // Recuperar los datos del localStorage
    const storedData = JSON.parse(localStorage.getItem("data"));

    // Actualizar el estado con los datos del localStorage
    setLocalStorageData(storedData);
  }, []); // La dependencia vacía garantiza que este efecto se ejecute solo una vez al montar el componente

  return (
    <bodyperfil>
        <main>
      <div className="perfil">
        <h1>Datos de usuario</h1>
        {localStorageData ? (
        <div id="datos-usuario">
            <p>
                <strong>Nombres:</strong>{localStorageData.name}
            </p>
            <p>
              <strong>Apellidos:</strong> {localStorageData.apellido}
            </p>
            
            <p><strong>Tipo de Usuario:</strong> {localStorageData.usertype}</p>
            
            
            <p><strong>Cedula de identidad:</strong> {localStorageData.ci}</p>
            
            
            <p><strong>Fecha de nacimiento:</strong> {localStorageData.date}</p>
            
            
            <p><strong>Genero:</strong> {localStorageData.genero}</p>
            
            
            <p><strong>Discapacidad:</strong> {localStorageData.discapacidad}</p>
            

        </div>
        ) : (
          <p>No hay datos almacenados en localStorage.</p>
        )}
      </div>
    </main>
    </bodyperfil>
  );
};

export default Perfil;
