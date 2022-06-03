import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./SignIn.css"

function SignIn() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const signIn=(e)=>{
        e.preventDefault();

        //firebase stuff

    }
    const signUp=(e)=>{
        e.preventDefault();
        //do some fancy firebase register
    }
  return (
    <div className='signIn'>
        <NavLink to="/" style={{textDecoration:"none"}}>
        <img  className="signIn__logo"src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Amazon logo"/>
        </NavLink>
       <div className="signIn__container">
           {/* user input */}
           <h1>Sign-In</h1>
           <form>
               <h5>E-mail</h5>
               <input type="text"  value={email} onChange={e=>setEmail(e.target.value)}/>
               <h5>Password</h5>
               <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
               <button className='signIn__button' type='submit' onClick={signIn}>Sign In</button>
           </form>
           <p>
           By continuing, you agree to Conditions of Use  and Privacy Notice. 
           </p>
           <button onClick={signUp} className='signUp__button'>Create your Amazon Account</button>
       </div>

    </div>

  )
}

export default SignIn