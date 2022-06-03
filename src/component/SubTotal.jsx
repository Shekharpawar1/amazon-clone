import React from 'react';
import "./SubTotal.css"
import CurrencyFormat from "react-currency-format";

function SubTotal() {
  return (
    <div className='subtotal'>
      <CurrencyFormat 
         renderText={(value) =>(
           <>
           {/* part of the self solving */}
             <p>Subtotal ({0} items): <strong>{`${value}`}</strong></p>
             <small className="subtotal__gift"><input type="checkbox" />This order contains a gift</small>
           </>
       )}
    decimalScale={2}
    value={0} 
    // part of self solving
    displayType={'text'}
    thousandSeparator={true}
    prefix={"$"}

   />
   <button >Proceed to Checkout</button>
    </div>
  )
}

export default SubTotal