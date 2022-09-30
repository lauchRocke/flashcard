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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route element={<About />} />
      <Route path="products" element={<Grammatica />}>
          <Route path="ending" element={<Ending />} />
      </Route>
      <Route path="grammatica" element={<Grammatica />}>
        <Route path="ending" element={<Ending />} />
        <Route path="indicated" element={<Indicated />}/>
      </Route>
    </Routes>
  );
}

export default App;
