import React, { useContext } from "react";
import { Route,Redirect} from "react-router-dom"
import { DataContext } from "./context";


const PrivateRoute = (props)=> {
     const { user } = useContext(DataContext)

    const { component:Component,auth, ...rest} = props
    return ( 
        <Route
            {...rest}
            render={ props =>
            user ? (
                <Component {...props}/>
            ) : (
                <Redirect
                to={{
                    pathname: "/auth",
                    state: { from: props.location }
                }}
                />
            ) 
            }
      />
     );
}


export default PrivateRoute;