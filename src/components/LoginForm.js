import React from 'react';
import {Link} from 'react-router-dom';

const LoginForm = ({user, setUser, submitHandler, errors}) => {

    const onChangeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <div className='container my-3'>
            <form className='col-5 offset-3' onSubmit={submitHandler}>
                <h2>Login</h2>
                <label className='form-label' htmlFor='email' >Email:</label>
                <input className='form-control'  id='email' type="text" name="email" value={user.email} onChange={onChangeHandler}/>

                <label className='form-label' htmlFor='password' >Password:</label>
                <input className='form-control'  id='password' type="password" name="password" value={user.password} onChange={onChangeHandler}/>
                {
                    errors.message?
                    <p className='text-danger' >{errors.message}</p>:
                    null
                }

                <button className='btn btn-warning my-3'>Login</button> <br/> 
                <Link className='my-3' to={''}>Forgot your password?</Link>
            </form>
        </div>
    );
}

export default LoginForm;
