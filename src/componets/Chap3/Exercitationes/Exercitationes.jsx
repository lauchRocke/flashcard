import React from 'react';
import TransformSgPl from './C/TransformSgPl';
import TransformNomGen from './D/TransformNomGen';
import { Link, Outlet } from 'react-router-dom';

function Exercitationes() {
  return (
    <div>
      <h3>Exercitationes</h3>
      <br />
      <Link to="/exercitationes/a">A</Link>
      <br />
      <Link to="/exercitationes/b">B</Link>
      <br />
      <Link to="/exercitationes/transformSgPl">TransformSgPl</Link>
      <br />
      <Link to="/exercitationes/transformNomGen">TransformNomGen</Link>
      <br />
      <Outlet />
    </div>
  );
}

export default Exercitationes;
