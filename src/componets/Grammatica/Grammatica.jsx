import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Ending from './Ending';
function Grammatica() {
  return (
    <div>
      <h3>Second declension</h3>

      <Link to="/grammatica/ending">Masculine case endings</Link>
      <br />
      <Link to="/grammatica/indicated">Indicated</Link>
      <br />
      <Link to="/grammatica/starts">Start</Link>
      <Outlet />
    </div>
  );
}

export default Grammatica;
