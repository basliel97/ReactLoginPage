import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {Link} from "react-router-dom";
const SignUp= () =>{
    return (
        
             <div className='login-container'>
                <form action="">
                <h2 className='login-text'>Sign Up</h2>
                <div className='input-box'>
                <input className='username' type="text" placeholder="username" /><FaUser className='icon'/> 
                </div>
           <div className='input-box'>
           <input className='password' type="password" placeholder="password" /><FaLock className='icon' />
           </div>
        
            <input className='submit' type="submit" value="Sign Up" />
            <p className='link'>Already have account? <Link to="/">Login</Link></p>
                </form>
            
        </div>
      
    );
}

export default SignUp;
