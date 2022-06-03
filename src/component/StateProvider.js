import React from 'react'
import { createContext,useContext,useReducer } from 'react'


//preparing the data layer
export const StateContext=createContext();

//wrap over app for the availability of the data
export const StateProvider=({reducer,intitalState,children})=>{
  <StateContext.Provider value={useReducer(reducer,intitalState)}>
    {children}
  </StateContext.Provider>

}

