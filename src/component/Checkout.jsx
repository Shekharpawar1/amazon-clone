import React from 'react';
import "./Checkout.css";
import SubTotal from "./SubTotal"

function Checkout() {
  return (

    <div className='checkout'>
        <div className="checkout__left">
              <p className='invisible' style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum natus aspernatur voluptates, possimus, omnis ut exercitationem, perspiciatis sapiente incidunt cupiditate quos repellat quisquam.</p>

            <h2 className='checkout__title'>Shopping Cart</h2>

           
        </div>
        <div className="checkout__right">
              
              <SubTotal/>
        </div>
        
     </div>

  )
}

export default Checkout