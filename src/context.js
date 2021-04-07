import React, { useReducer } from 'react'

export const DataContext = React.createContext()

const ACTION = {
    USER:'user'
}

function reducer(state,action){
    switch(action.type){
        case ACTION.USER :
            return {
                ...state,
                user:action.user
            }
        default:
            return state;
    }
  
}

export const DataContextProvider = (props) =>{

    const [state,dispatch] = useReducer(reducer,{user:null})
    const {user} = state

    console.log(user);

    return(
        <DataContext.Provider value={{user,dispatch}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider