import React from 'react'
import { createContext, useReducer,useState } from 'react'
export const ProductsContext = createContext()


export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return { 
        workouts: action.payload 
      }
    case 'CREATE_WORKOUT':
      return { 
        workouts: [action.payload, ...state.workouts] 
      }
    case 'DELETE_WORKOUT':
      return { 
        workouts: state.workouts.filter(w => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}



export const ProductsContextProvider = ({ children }) => {

  const productsData = [{ img: 'Product_10_Lulu_Student.webp', productname: 'Lulu Student', score: 4.9, username: 'SuperLulu', price: 295 }, { img: 'Product_11_fitness_Lulu.jpg', productname: 'Fitness Lulu', score: 4.8, username: 'LuluMania', price: 264 }, { img: 'Product_1_Wukong.webp', productname: 'Wukong', score: 4.7, username: 'SuperLulu', price: 143 }, { img: 'Product_2_flamingo_floatie.jpg', productname: 'Flamingo Floatie', score: 4.9, username: 'SuperLulu', price: 253 }, { img: 'Product_3_Birthday_Cake.jpg', productname: 'Birthday Cake', score: 4.6, username: 'SuperLulu', price: 293 }, { img: 'Product_4_Can_of_3.jpg', productname: 'Can of Three', score: 4.6, username: 'LuluMania', price: 117 }, { img: 'Product_5_Party_Lulu.jpg', productname: 'Party Lulu', score: 4.8, username: 'SuperLulu', price: 271 }, { img: 'Product_6_Can_Of_6.jpg', productname: 'Can of Six', score: 4.6, username: 'SuperLulu', price: 17 }, { img: 'Product_7_Lulu_Sheep.jpg', productname: 'Lulu Sheep', score: 4.6, username: 'SuperLulu', price: 91 }, { img: 'Product_8_Lulu_Lite.jpg', productname: 'Lulu Lite', score: 4.8, username: 'LuluMania', price: 188 }, { img: 'Product_9_Sakura_Lulu.jpg', productname: 'Sakura Lulu', score: 4.7, username: 'LuluMania', price: 19 }]
  const [state, dispatch] = useReducer(workoutsReducer, { 
    workouts: null
  })

  return (

    <ProductsContext.Provider value={{ productsData }}>
      {children}
    </ProductsContext.Provider>
  )
}
