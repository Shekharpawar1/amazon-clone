import { ListItemSecondaryAction } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import CheckoutProduct from './CheckoutProduct'
import "./Payment.css"
import { StateContext } from './StateProvider'

function Payment() {
    const {item,user} =useContext(StateContext)
    const navigate=useNavigate()
  return (
    <div className='payment'>

        <div className="payment__container">
           <h1>Checkout (<NavLink to="/checkout" style={{textDecoration:"none"}}>{item.length} items</NavLink>)</h1> 
            {/* checkout info */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>

                </div>
                <div className="payment__address">
                    <p>
                         {user}
                    </p>
                    <p>
                        123,React Lane
                    </p><p>
                        Los Angeles,CA
                    </p>
                </div>
            
                
            </div>
            {/* product */}
            <div className="payment__section">
                <div className="payment__title">
                   <h3>Review Items and Delivery</h3>
                </div>
                <div className="payment__items">
                    {item.map(items=>{
                        const {id,title,image,price,rating} =items
                        return ( <CheckoutProduct key={id} id={id} title={title} image={image} price={price} rating={rating}/>)
                    })}
                </div>
                
            </div>
            {/* order total  */}
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>

                </div>
                <div className="payment__details">
                    {/* stripe magic will go  */}
                    <form style={{display:"flex",flexDirection:"column"}}>
                        <label for="cardNo">Card No.</label>
                        <input type="text"/>
                        <label for="expiry">Expiry Date.</label>
                        <input type="date"/>

                        <label for="cvv">Cvv</label>
                        <input type="text"/>

                        <button  onClick={()=>navigate("/success")}style={{
backgroundColor: "#f0c14b",
    border: "1px solid",
    marginTop: "10px",
    borderColor: "#a88734 #9c7e31 #946a29",
    color:" #111",

    padding:"10px"

}}>Pay</button>
                    </form>
                    
                    
                </div>



                
            </div>
        </div>
    </div>

  )
}

export default Payment