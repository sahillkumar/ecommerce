import { Card, CardActionArea, CardActions, CardMedia, Grid } from '@material-ui/core';
import React from 'react';
import {baseUrl} from '../../shared/baseUrl'

const style={
    item:{
        height:700,
        background:'red'
    }
}

const ItemDetails = ({selectedItem}) => {

    {console.log(selectedItem)}
    if(selectedItem!==null)
    return ( 
        <Grid container>
            <Grid item xs={6} style={style.item}>
                <div>
                    <Card>
                        <CardActionArea>
                        <CardMedia 
                            image={baseUrl+selectedItem.image}
                            title={selectedItem.name}
                            style={{height:500}}
                        />
                        </CardActionArea>
                    </Card>
                </div>
            </Grid>
            <Grid item xs={6} style={{...style.item,background:'yellow'}}>
                <div>
                    <h1>{selectedItem.name}</h1>
                    <p>
                        <h4>{selectedItem.description}</h4>
                    </p>
                </div>
            </Grid>
        </Grid>
    );
    else
    return(
        <div></div>
    )
     
}
 
export default ItemDetails;


