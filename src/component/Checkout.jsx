import { InsertEmoticon } from '@mui/icons-material';
import React from 'react';
import { useContext } from 'react';
import "./Checkout.css";
import { StateContext } from './StateProvider';
import SubTotal from "./SubTotal"


function Checkout() {
  const {item}=useContext(StateContext)
  return (

    <div className='checkout'>
        <div className="checkout__left">
              <p className='invisible' style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum natus aspernatur voluptates, possimus, omnis ut exercitationem, perspiciatis sapiente incidunt cupiditate quos repellat quisquam.</p>

            <h2 className='checkout__title'>Shopping Cart</h2>
            {item.map(items=>{
              return (
              <>
                <p>{items.title}</p>
                <p className='product__price'><small>$</small><strong>{items.price}</strong></p>
                <div className="product__rating">
                {Array(items.rating).fill().map((_,i)=>{
                return (<p>
                    ⭐
                </p>)
                })}
                 <img src={items.image} />

            </div>
              </>
               )
            })}

           
        </div>
        <div className="checkout__right">
              
              <SubTotal/>
        </div>
        
     </div>

  )
}

export default Checkout