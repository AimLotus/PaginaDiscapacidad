import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home.jsx';
import Login from './components/login.jsx';
import Perfil from './components/perfil.jsx';
import Register from './components/register.jsx';
import SolicitudSeguimiento from './components/solicitud.jsx';
import UpdateProfile from './components/update.jsx';
import Navbar from './components/navbar.jsx';

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <>
      <Router>
        <Navbar token={token} setToken={setToken} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login setToken={setToken} />} />
          <Route path='/register' element={<Register setToken={setToken} />} />
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/solicitud' element={<SolicitudSeguimiento />} />
          <Route path='/update' element={<UpdateProfile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
