import './App.css';
import Grammatica from './componets/Grammatica/Grammatica';
import Layout from './componets/Layout/Layout';
import {
  BrowserRouter,
  Switch,
  Routes,
  Link,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import Ending from './componets/Grammatica/Ending';
import About from './componets/About/About';

import Singular from './componets/Grammatica/Singular';
import Indicated from './componets/Grammatica/Indicated';
import Exercitationes from './componets/Exercitationes/Exercitationes';
import A from './componets/Exercitationes/A/A';
import B from './componets/Exercitationes/B/B';
import TransformSgPl from './componets/Exercitationes/C/TransformSgPl';
import TransformNomGen from './componets/Exercitationes/D/TransformNomGen';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route element={<About />} />
    
      <Route path="grammatica" element={<Grammatica />}>
        <Route path="ending" element={<Ending />} />
        <Route path="indicated" element={<Indicated />}/>
      </Route>
      <Route path="exercitationes" element={<Exercitationes />}>
        <Route path="a" element={<A />}/>
        <Route path="b" element={<B />}/>
        <Route path="transformSgPl" element={<TransformSgPl />}/>
        <Route path="transformNomGen" element={<TransformNomGen />}/>
      </Route>
    </Routes>
  );
}

export default App;
