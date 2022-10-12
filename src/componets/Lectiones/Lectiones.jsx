import React from 'react';
import { Link, Outlet } from 'react-router-dom';


function Lectiones() {
  return (
    <>
      <h3>Lectiones</h3>
      <Link to="/lectiones/translate">
        Translate</Link>
        
        <Outlet />
    </>
  );
}

export default Lectiones;
