import { Card, CardActionArea,Button, CardMedia, Grid } from '@material-ui/core';
import React from 'react';
import {baseUrl} from '../../shared/baseUrl'

const style={
    item:{
        height:'100vh',
        padding:110
    }
}

const ItemDetails = ({selectedItem}) => {

    {console.log(selectedItem)}
    if(selectedItem!==null)
    return ( 
        <Grid
            container
            spacing={0}
            
        >
            <Grid item xs={6} style={style.item}>
                <div className="zoom">
                    <Card style={{width:480,height:550,marginLeft:30}}>
                        <CardActionArea>
                        <CardMedia 
                            image={baseUrl+selectedItem.image}
                            title={selectedItem.name}
                            style={{height:550}}
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
                    <p>
                        <Button variant="outlined">Add to Cart</Button>
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


