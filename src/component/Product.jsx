import React from 'react'
import "./Product.css"
// import StarIcon from '@mui/icons-material/Star';
function Product({title,image,price,rating}) {
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
        <button className='product__button' type="submit">Add to basket</button>
    </div>
</>
)
}

export default Product