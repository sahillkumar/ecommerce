import React, { useReducer } from 'react'

export const DataContext = React.createContext()

const ACTION = {
    USER:'user',
    PRODUCTSINCART:'productsincart',
    AMOUNT:'amount',
    WISHLISTPRODUCTS : 'productsInWishlist'
}

function reducer(state,action){
    switch(action.type){
        case ACTION.USER :
            return {
                ...state,
                user:action.user
            }
        case ACTION.PRODUCTSINCART :
            return{
                ...state,
                productsincart:action.productsincart
            }
        case ACTION.AMOUNT :
            return{
                ...state,
                amount:action.amount
            }
        case ACTION.WISHLISTPRODUCTS :
            return{
                ...state,
                wishlist : action.productsInWishlist
            }
        default:
            return state;
    }
  
}

export const DataContextProvider = (props) =>{

    const [state,dispatch] = useReducer(reducer,{user:null,productsincart:null,amount:0,wishlist:[]})
    const {user,productsincart,amount,productsInWishlist} = state
  
    
    return(
        <DataContext.Provider value={{user,dispatch,productsincart,amount,productsInWishlist}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider