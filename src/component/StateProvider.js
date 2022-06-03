import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'




export const StateContext=createContext()


//selector
export const getBasketTotal=(item)=>{
  item?.reduce((amount,item)=>{ return item.price+ amount,0})

}

export const StateProvider=({children})=>{
  const [item,setItem]=useState([])

  const addToBasket=(title,price,image,rating)=>{
    setItem((prevState)=>{
      return [... prevState,{title,price,image,rating}]
    
    })
    
  }

  return (
    <StateContext.Provider value={{item,addToBasket,getBasketTotal}}>
      {children}
    </StateContext.Provider>
  )
}



//pull information from the data layer
