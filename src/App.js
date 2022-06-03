import React from "react"
import './App.css';
import Header from "./component/Headers";
import Home from "./component/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Checkout from "./component/Checkout";



function App() {
  return (
    <>
   
    <Router>
      
      <div className="app">
      <Header/>
        <Routes>
           <Route exact path="/" element={<> <Home/></>} />
           <Route exact path="/checkout" element={<><Checkout/></>}/>
        </Routes>
   
    </div> 
    </Router>
   
  
    </>
  );
}

export default App;
