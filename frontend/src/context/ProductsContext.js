import React from 'react'
import { createContext, useReducer, useState } from 'react'
import dataAPI from '../dataAPI'


export const ProductsContext = createContext()

export const productsReducer = (state, action) => {
  //actions to update state
  switch (action.type) {
    case 'SET_PRODUCT':
      return {
        products: action.payload
      }
    case 'CREATE_PRODUCT':
      return {
        products: [action.payload, ...state.products]
      }
    case 'DELETE_PRODUCT':
      return {
        products: state.products.filter(w => w._id !== action.payload._id)
      }
    default:
      return state
  }
}



export const ProductsContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(productsReducer, {
    // products: dataAPI.slice(0,2)
    products: dataAPI
    //remember I sliced the input
  })


  return (

    <ProductsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  )
}
