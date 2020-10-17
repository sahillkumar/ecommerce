import { Grid } from '@material-ui/core';
import React from 'react';

const style={
    item:{
    
        height:700,
        background:'red'
    }
}

const ItemDetails = ({selectedItem}) => {


    if(selectedItem!==null)
    return ( 
        <Grid container>
            <Grid item xs={6}>
                <div style={style.item}>
                    <h1>{selectedItem.name}</h1>
                </div>
                <div></div>
            </Grid>
        </Grid>
    );
    else
    return(
        <div></div>
    )
     
}
 
export default ItemDetails;


