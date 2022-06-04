import React from 'react'
import { useContext } from 'react'
import "./Product.css"
import { StateContext } from './StateProvider'
import { StateProvider } from './StateProvider'
// import StarIcon from '@mui/icons-material/Star';
function Product({id,title,image,price,rating}) {


const {addToBasket}=useContext(StateContext)
return (

<>
    <div className="product">
        <div className="product__info">
           
            <p>{title}</p>
            <p className='product__price'><small>$</small><strong>{price}</strong></p>
            <div className="product__rating">
                {Array(rating).fill().map((_,i)=>{
                return (<p> 
                    ⭐
                </p>)
                })}

            </div>
        </div>

        <img src={image} />
        <button className='product__button' onClick={()=>addToBasket(id,title,price,image,rating)}>Add to basket</button>
    </div>
</>
)
}

export default Product