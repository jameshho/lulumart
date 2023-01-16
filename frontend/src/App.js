import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/productdetail' element={<ProductDetail/>}/>
            <Route path='/productpage' element={<ProductPage/>}/>
            <Route path='/productpage/:productId' element={<ProductDetail/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>

    </div>

  );
}

export default App;
