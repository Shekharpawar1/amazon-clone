import React from "react"
import './App.css';
import Header from "./component/Headers";
import Home from "./component/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Checkout from "./component/Checkout";
import {StateContext, StateProvider} from "./component/StateProvider";
import SignIn from "./component/SignIn";
import { useEffect } from "react";
import {auth} from "./component/Firebase"
import { useContext } from "react";
import Payment from "./component/Payment";



function App() {
  //listener for checkinug who is signed up
  //this would only run for once
  // const {user,addUser}=useContext(StateContext)
  // useEffect(() => {
    
  //   auth.onAuthStateChanged(authUser=>{
  //     console.log('the user is >> ' ,authUser)
  //     if(authUser){
  //       //the user just logged in
  //       addUser(authUser)

  //     }
    

  //   })
  
   
  // }, [])
  
  
  return (
    <>
    <StateProvider  >
    <Router>
      
      <div className="app">
    
        <Routes>
           <Route exact path="/" element={<>  <Header/> <Home/></>} />
           <Route exact path="/checkout" element={<>  <Header/><Checkout/></>}/>
           <Route exact path="/signIn" element={<SignIn/>}/>

          <Route exact path="/payment" element={<Payment/>}/>
        </Routes>
   
        </div> 
    </Router>
   
    </StateProvider>
    </>
  );
}

export default App;
