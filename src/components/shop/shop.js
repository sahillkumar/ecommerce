import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';


const style={
    paper:{
        height:'500px',
        color:'red',
        background:'black',
        overflowY:'auto',
    }
}

const Item = ({item}) => {
    return ( 

        <Card key={item.id} style={{maxWidth:345,height:350}} raised>
            
            <CardActionArea>
                <Link to={`/shop/${item.id}`}>
                <CardMedia
                    style={{height:140}}
                    image={item.image}
                    title={item.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {item.description}
                    </Typography>
                </CardContent>
            </Link>
            </CardActionArea>
            
      </Card>
     );
}
 



const Shope = ({items}) => {

    const products=items.map((item)=>{
        return(
            <Grid item style={{margin:15}}>
                <Item item={item}/>
            </Grid>
        )
    })

    return ( 
        <Grid container  spacing={2}>
            <Grid item xs={3} >
                <Paper style={style.paper}>
                    <Typography>
                        yaha ayenge filters
                    </Typography>
                </Paper>
            </Grid>
            <Grid container xs={9} >
                {products}
            </Grid>
        </Grid>
     );
}
 
export default Shope;