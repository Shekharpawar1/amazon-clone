import React, { useContext } from 'react';
import "./SubTotal.css"
import CurrencyFormat from "react-currency-format";
import { getBasketTotal, StateContext } from './StateProvider';
function SubTotal() {
  const{item,getBasketTotal}=useContext(StateContext)

  return (
    <div className='subtotal'>
      <CurrencyFormat 
         renderText={(value) =>(
           <>
           {/* part of the self solving */}
             <p>Subtotal ({item.length} items): <strong>{value}</strong></p>
             <small className="subtotal__gift"><input type="checkbox" />This order contains a gift</small>
           </>
       )}
    decimalScale={4}
    value={getBasketTotal(item)} 
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