import React  from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='auth'>
            <h1>Login</h1>
            <form>
                <input type='text' placeholder='username' />
                <input type='password' placeholder='Password' />
                <button type='submit'>Login</button>
                <p>Incorrect Username/password !!</p>
                <span>
                    Don't have an account?  <Link to='/register'>Register</Link>
                </span>
            </form>
        </div>
    )
}

export default Login;