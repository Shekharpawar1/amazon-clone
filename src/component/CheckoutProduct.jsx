import React from 'react'
import { useContext } from 'react'
import "./Checkout.css"
import { StateContext } from './StateProvider'
function CheckoutProduct({id,title,price,image,rating}) {
    // const {removeFromBasket} =useContext(StateContext)
    const {item,setItem}=useContext(StateContext)
    
    const removeFromBasket=(id)=>{
        let index=item.filter(items=>{
            return items.id!==id
        })
        setItem(index)
    }
return (
    <>
<div className="checkoutProduct">
    <div className="checkoutProduct__info">
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'><small>$</small><strong>{price}</strong></p>
        <div className="checkoutProduct__rating">
            {Array(rating).fill().map((_,i)=>{
            return (<p>
                ⭐
            </p>)
            })}

        </div>
        <button className='checkoutProduct__button' onClick={()=>removeFromBasket(id)}>Remove from basket</button>
    </div>

    <img  clasName="checkoutProduct__img"src={image}  height="180px" width="150px"/>
    
</div>

</>
)
}

export default CheckoutProduct