
import Footer from './Footer';
import NavBar from './NavBar';
import ProductsTable from './ProductsTable';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const StoreManager = ({allProducts, setAllProducts}) => {
    const navigate = useNavigate()
    const [authenticated, setAuthenticated] = useState({});

        useEffect(() => {
            //so the Correct way to send a user token to verify is to send it in headers and bearers type
            //install in client side js-cookie and import Cookies form 'js-cookie'
            //const token = Cookies.get('jwtToken'); or the name of the cookie which in this case is user token
            // const headers = {
            //     Authorization: `Bearer ${token}`,
            //     'Content-Type': 'application/json',
            //   };
            
            //   axios.post('http://localhost:8000/api/register', user, { headers })
            

            axios.post('https://taquiza-api.onrender.com/api/authenticated', {}, {withCredentials:true})
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                    navigate('/');
                })

            axios.get('https://taquiza-api.onrender.com/api/allproducts')
                .then((products) => {
                    console.log(products)
                    setAllProducts(products.data)
                })
                .catch((err) => console.log(err));
                setAllProducts([])
        },[])


        const deleteItem = (id) => {
            axios.delete(`https://taquiza-api.onrender.com/api/allproducts/delete/${id}`)
                .then((res) => {
                    console.log("item deleted", res)
                    let updatedProducts= allProducts.filter(item => item._id !== id)
                    setAllProducts(updatedProducts);
                    
                })
                .catch((err) => console.log(err));
        }

        const logout = () => {
            axios.post('https://taquiza-api.onrender.com/api/logout', {}, {withCredentials:true})
                .then((res) => {
                    console.log(res);
                    navigate('/')
                })
                .catch((err) => {
                    console.log(err);
                })
        }


    return (
        <div>
            <NavBar/>
            <section>
                <div className='container my-2'>
                    <div className='row'>
                        <div>
                            <h2>Welcome!</h2>
                            <p>Menu changes will be available soon</p>
                        </div>
                        <div>
                            <Link to={'/store-manager/addproduct'}>+ Add Product</Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className='container d-flex justify-content-end'>
                <button className='btn btn-sm btn-primary' onClick={logout} >Logout</button>
            </div>
            <ProductsTable allProducts={allProducts} setAllProducts={setAllProducts} deleteItem={deleteItem}/>
            <Footer/>
        </div>
    );
}

export default StoreManager;
