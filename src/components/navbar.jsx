// Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../media/logo.png";
import "./navbar.css";

const Navbar = ({ token, setToken }) => {
  const handleLogout = () => {
    // Limpiar el token al cerrar sesión
    setToken(null);
  };

  return (
    <header className="">
      <nav className="">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul>
          <li>
            <NavLink className={"li-nav"} to={"/"}>
              Pagina Principal
            </NavLink>
          </li>
          <li>
            <NavLink className={"li-nav"} to={"/solicitud"}>
              Solicitud de seguimiento
            </NavLink>
          </li>
          <li>
            <NavLink className={"li-nav"} to={"/update"}>
              Actualizar datos
            </NavLink>
          </li>
          <li>
            <NavLink className={"li-nav"} to={"/perfil"}>
              Perfil de usuario
            </NavLink>
          </li>
          {!token ? (
            <>
              <li>
                <NavLink className={"li-nav"} to={"/login"}>
                  Iniciar sesión
                </NavLink>
              </li>
              <li>
                <NavLink className={"li-nav"} to={"/register"}>
                  Registrarse
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <button onClick={handleLogout}>Cerrar sesión</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
