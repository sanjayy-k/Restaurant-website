import React from 'react'
import './Sign.css'
import {Link} from 'react-router-dom';
const Signup = () => {
  return (
    <div className='ab'> 
    <form id="loginForm" action="" name="form">
<section>
    <div class="form-box">
        <div class="form-value">
            <form action=""/>
<h2>Foodie Login</h2>
<div class="inputbox">
    <ion-icon name="mail-outline"></ion-icon>
    <input type="email" name="email"required />
       <label for="">Email</label>
    </div>
    <div class="inputbox">
        <ion-icon name="lock-closed-outline"></ion-icon>
        <input type="password" name="password" required/>
           <label for="">password</label>
        </div>
        <div class="forget">
            <label for=""><input type="checkbox"/>Remember me <a href="#">Forget Password</a></label>
        </div>
        <Link to='/Home'><button id="loginButton">Log in</button></Link>
        <div class="register">
            <p>Dont have a account <a href="#">/ Register</a></p>
        </div>
           
        </div>
    </div>
    
</section>
</form>
   </div>
  )
}

export default Signup;
