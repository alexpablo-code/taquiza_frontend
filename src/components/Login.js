import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Footer from './Footer';
import LoginForm from './LoginForm';
import NavBar from './NavBar';

const Login = () => {
    const navigate = useNavigate();
    const[errors, setErrors] = useState({})

    const[user, setUser] = useState({
        email:"",
        password: ""
    })

    const submitHandler =(e) =>{
        e.preventDefault();

        axios.post('https://taquiza-api.onrender.com/api/login', user, {withCredentials:true})
            .then((res) => {
                console.log(res)
                navigate('/store-manager')
            })
            .catch((err) => {
                console.log(err.response.data);
                setErrors(err.response.data);
            })
    }





    return (
        <div>
            <NavBar/>
            <LoginForm user={user} setUser={setUser} submitHandler={submitHandler} errors={errors} />
            <Footer/>
        </div>
    );
}

export default Login;
