import { InsertEmoticon } from '@mui/icons-material';
import React from 'react';
import { useContext } from 'react';
import "./Checkout.css";
import { StateContext } from './StateProvider';
import SubTotal from "./SubTotal"
import CheckoutProduct from "./CheckoutProduct"

function Checkout() {
const {item}=useContext(StateContext)
console.log(item)

return (

<div className='checkout'>
  <div className="checkout__left">
    <p className='invisible' style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
      natus aspernatur voluptates, possimus, omnis ut exercitationem, perspiciatis sapiente incidunt cupiditate quos
      repellat quisquam.</p>

    <h2 className='checkout__title'>Shopping Cart</h2>
    {item.map(items=>{

     const {id,title,image,price,rating}=items
    return (
    <>
    <CheckoutProduct key={id} id={id} title={title} image={image} price={price} rating={rating}/>
     
    </>
    )
    })}


  </div>
  <div className="checkout__right">

    <SubTotal />
  </div>

</div>

)
}

export default Checkout