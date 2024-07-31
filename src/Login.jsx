import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {Link} from "react-router-dom";
const Login= () =>{
    return (
       
             <div className='login-container'>
                <form action="">
                <h2 className='login-text'>Login</h2>
                <div className='input-box'>
                <input className='username' type="text" placeholder="username" /><FaUser className='icon'/> 
                </div>
           <div className='input-box'>
           <input className='password' type="password" placeholder="password" /><FaLock className='icon' />
           </div>
           <div className='remember-forget'>
            <a href="">Forget Password?</a>
           </div>
           
            <input className='submit' type="submit" value="Login" />
            <p className='link'>Don't have account <Link to="/signup">SignUp</Link></p>
                </form>
            
        </div>
      
       
    );
}

export default Login;
