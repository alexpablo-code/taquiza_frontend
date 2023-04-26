import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import StoreManager from './components/StoreManager';
import {useState, useEffect} from 'react';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Menu from './Pages/Menu';
import axios from 'axios';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios.get('https://taquiza-api.onrender.com/api/allproducts')
        .then((products) => {
            console.log(products)
            setAllProducts(products.data)
        })
        .catch((err) => console.log(err));
},[])


  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu  allProducts={allProducts} />} />
        <Route path='/manager-register' element={<Register/>} />
        <Route path='/manager-login' element={<Login/>} />
        <Route path='/store-manager'>
          <Route index element={<StoreManager/>} />
          <Route path='addproduct' element={<AddProduct/>} />
          <Route path='editproduct/:id' element={<EditProduct/>} />
        </Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
