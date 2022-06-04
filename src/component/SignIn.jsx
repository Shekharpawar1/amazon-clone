import React from 'react';
import { useState } from 'react';
import { useNavigate,NavLink}from 'react-router-dom';
import "./SignIn.css"
import { auth } from "./Firebase"



function SignIn() {
    //allow use to change the pageor the url
    const history=useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const signIn=(e)=>{
        e.preventDefault();
 
        //firebase stuff
        auth.signInWithEmailAndPassword(email,password).then(auth=>{history("/")}).catch(error=>alert(error.message))


    }
    const signUp=(e)=>{
        e.preventDefault();
        //do some fancy firebase register
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            //this would return success auth 
              console.log(auth)
              if(auth){
                  history("/")
              }
          }).catch((error)=>{alert(error.message)})

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