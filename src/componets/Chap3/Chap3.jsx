import React from 'react';
import { Outlet, Link, Route, Routes } from 'react-router-dom';
import Ending from './Grammatica/Ending';
import Grammatica from './Grammatica/Grammatica';

import Indicated from './Grammatica/Indicated';
import Exercitationes from './Exercitationes/Exercitationes';

import TransformSgPl from './Exercitationes/C/TransformSgPl';
import TransformNomGen from './Exercitationes/D/TransformNomGen';

function Chap3() {
  return (
    <div>
      <Link to="/chap3/grammatica">Grammatica</Link>
      <br />
      <Link to="/chap3/exercitationes">Exercitationes</Link>
 {/*
        <Route path="grammatica" element={<Grammatica />} />
        <Route path="grammatica/ending" element={<Ending />} />
        <Route path="grammatica/indicated" element={<Indicated />} />

        <Route path="exercitationes" element={<Exercitationes />} />
        <Route
          path="exercitationes/transformSgPl"
          element={<TransformSgPl />}
        />
        <Route
          path="exercitationes/transformNomGen"
          element={<TransformNomGen />}
        />*/}
  
    </div>
  );
}

export default Chap3;
