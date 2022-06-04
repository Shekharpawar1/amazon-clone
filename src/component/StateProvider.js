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
  const [user,setUser]=useState([""])

  const addToBasket=(id,title,price,image,rating)=>{
    setItem((prevState)=>{
      return [... prevState,{id:id,title:title,price:price,image:image,rating:rating}]
    
    })

    
  }
  
  const addUser=(user)=>{
    setUser(prev=>{
      return [...prev,user]
    })
  }

  return (
    <StateContext.Provider value={{item,user,setItem, addUser,addToBasket,getBasketTotal}}>
      {children}
    </StateContext.Provider>
  )
}



//pull information from the data layer
