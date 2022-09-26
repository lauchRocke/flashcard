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
import Search from './componets/products/Search';
import AddProduct from './componets/products/AddProduct';
import ProductDisplay from './componets/products/ProductDisplay';
import ListProducts from './componets/products/ListProducts';
import Products from './componets/products/Products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route element={<About />} />
      <Route path="products" element={<Grammatica />}>
          <Route path="ending" element={<Ending />} />
          <Route path="list" element={<ListProducts />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id" element={<ProductDisplay />} />
      </Route>
      <Route path="grammatica" element={<Grammatica />}>
        <Route path="ending" element={<Ending />} />
      </Route>
    </Routes>
  );
}

export default App;
