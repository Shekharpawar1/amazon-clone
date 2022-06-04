import React from 'react'
import {useNavigate} from "react-router-dom"

function Success() {
    const navigate=useNavigate()
  return (
    <div className="success" style={{display:"flex",flexDirection:"column",alignItems:"Center",gap:"2rem" ,marginTop:"2rem"}}>

        <h1 className='success__title' style={{textAlign:'center'}}>Thank you, your order has been placed.</h1>
        <p className='success__info'>Please check your email for order confirmation and detailed delivery information or visit Message center to review your notifications</p>
        <button onClick={()=>navigate("/")}style={{
backgroundColor: "#f0c14b",
    border: "1px solid",
    marginTop: "10px",
    borderColor: "#a88734 #9c7e31 #946a29",
    color:" #111",

    padding:"10px"

}}>Go to Home </button>
    </div>
  )
}

export default Success

