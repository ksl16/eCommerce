import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import Shop from './pages/Shop';
import ShopDetail from './pages/ShopDetail';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import Notfound from './pages/pagenotfound/Notfound';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForGotPass from './pages/ForGotPass';
import CatBasedProducts from './pages/CatBasedProducts';

function App() {
  return (
    
      <BrowserRouter>
     <ToastContainer />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="product" element={<Shop/>} />
          <Route path="product/:id" element={<ShopDetail/>} />
          <Route path="category/:id" element={<CatBasedProducts/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="cart" element={<Cart/>} />
          <Route path="checkout" element={<CheckOut/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Signup/>} />
          <Route path="/forgotpass" element={<ForGotPass/>} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
    </BrowserRouter>

  );
}

export default App;
