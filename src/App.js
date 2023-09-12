
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import SingleProduct from './components/SingleProduct';
import ProductState from './context/ProductState';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <div className='App'>
    <ProductState>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="cart" element={ <Cart/> } /> 
        <Route exact path="checkout" element={ <Checkout/> } /> 
        <Route exact path="confirm" element={ <Confirmation/> } /> 
        <Route exact path="detail/:id" element={ <SingleProduct/> } /> 
      </Routes>
      </Router>
      </ProductState>
      </div>
  );
}

export default App;
