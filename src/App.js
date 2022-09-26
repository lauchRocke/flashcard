
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
  useParams
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route index element={<Layout />}/>
       <Route path="Grammatica" element={<Grammatica />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
