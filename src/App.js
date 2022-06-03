import React from "react"
import './App.css';
import Header from "./component/Headers";
import Home from "./component/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Checkout from "./component/Checkout";
import {StateProvider} from "./component/StateProvider";
import SignIn from "./component/SignIn";
// import reducer, { intitalState} from './component/reducer';





function App() {
  return (
    <>
    <StateProvider  >
    <Router>
      
      <div className="app">
    
        <Routes>
           <Route exact path="/" element={<>  <Header/> <Home/></>} />
           <Route exact path="/checkout" element={<>  <Header/><Checkout/></>}/>
           <Route exact path="/signIn" element={<SignIn/>}/>
        </Routes>
   
    </div> 
    </Router>
   
    </StateProvider>
    </>
  );
}

export default App;
