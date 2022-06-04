import { ListItemSecondaryAction } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import CheckoutProduct from './CheckoutProduct'
import "./Payment.css"
import { StateContext } from './StateProvider'

function Payment() {
    const {item,user} =useContext(StateContext)
  return (
    <div className='payment'>
        <div className="payment__container">
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
                </div>
                
            </div>
        </div>
    </div>

  )
}

export default Payment