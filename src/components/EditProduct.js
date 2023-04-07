import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import ProductForm from './ProductForm';
import axios from 'axios';

const EditProduct = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const[product, setProduct] = useState({})
    const[errors, setErrors] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/allproducts/${id}`)
            .then((oneProd) => {
                setProduct(oneProd.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/allproducts/update/${id}`, product)
            .then((result) => {
                console.log(result)
                navigate('/store-manager')
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data.errors)
            })
    }


    return (
        <div>
            <NavBar/>
            <ProductForm product={product} setProduct={setProduct} errors={errors} submitHandler={submitHandler}/>
            <Footer/>
        </div>
    );
}

export default EditProduct;
