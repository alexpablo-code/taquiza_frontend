import React from 'react';
import {Link} from 'react-router-dom';

const RegisterForm = ({user, setUser, submitHandler, errors}) => {

    const onChangeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }



    return (
        <div className='container my-3' >
            <form className='col-5 offset-3' onSubmit={submitHandler}>
                <h2>Register</h2>
                <label className='form-label'>First Name:</label>
                <input className='form-control' type="text" name="firstName" value={user.firstName} onChange={onChangeHandler}/>
                {
                    errors.firstName?
                    <p className='text-danger' >{errors.firstName.message}</p>:
                    null
                }
                <label className='form-label'>Last Name:</label>
                <input className='form-control' type="text" name="lastName" value={user.lastName} onChange={onChangeHandler}/>
                {
                    errors.lastName?
                    <p className='text-danger' >{errors.lastName.message}</p>:
                    null
                }

                <label className='form-label'>Email:</label>
                <input className='form-control' type="text" name="email" value={user.email} onChange={onChangeHandler}/>
                {
                    errors.email?
                    <p className='text-danger' >{errors.email.message}</p>:
                    null
                }

                <label className='form-label'>Password:</label>
                <input className='form-control' type="password" name="password" value={user.password} onChange={onChangeHandler}/>
                {
                    errors.password?
                    <p className='text-danger' >{errors.password.message}</p>:
                    null
                }

                <label className='form-label'>Confirm Password:</label>
                <input className='form-control' type="password" name="confirmPassword" value={user.confirmPassword} onChange={onChangeHandler}/>
                {
                    errors.confirmPassword?
                    <p className='text-danger' >{errors.confirmPassword.message}</p>:
                    null
                }

                <button className='btn btn-warning my-3'>Register</button> <br/> 
                <Link className='my-3' to={'/manager-login'}>Already have an account? Click here to login</Link>
            </form>
        </div>
    );
}

export default RegisterForm;
