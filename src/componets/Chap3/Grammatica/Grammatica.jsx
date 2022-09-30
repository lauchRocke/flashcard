import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Ending from './Ending';
function Grammatica() {
  return (
    <div>
      <h3>Second declension</h3>

      <Link to="/grammatica/ending">Masculine case endings</Link>
      <br />
      <Link to="/chap3/grammatica/indicated">Indicated</Link>
      <br />
      <Link to="/">Home</Link>
      <Outlet />
    </div>
  );
}

export default Grammatica;
