import React, {useState} from 'react';
import { Button, Grid, Paper, Typography, Card, CardMedia, CardContent } from "@material-ui/core";
import './userOrdersStyle.css'
const UserOrders = () =>{
    let mockOrder = [{
        name:'Juice',
        date:'20-01-2021',
        price:'123',
        img:'https://png.pngtree.com/png-vector/20191207/ourmid/pngtree-glass-of-orange-juice-illustration-vector-on-white-background-png-image_2043835.jpg',
        id:'#23234234',
        category:'beverages',
        quantity:3,
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, animi?'
    },
    {
        name:'Juice12',
        date:'22-01-2021',
        price:'183',
        img:'https://png.pngtree.com/png-vector/20191207/ourmid/pngtree-glass-of-orange-juice-illustration-vector-on-white-background-png-image_2043835.jpg',
        id:'#23234234',
        category:'beverages',
        quantity:3,
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, animi?'
    },
    {
        name:'Juice12',
        date:'22-01-2021',
        price:'183',
        img:'https://png.pngtree.com/png-vector/20191207/ourmid/pngtree-glass-of-orange-juice-illustration-vector-on-white-background-png-image_2043835.jpg',
        id:'#23234234',
        category:'beverages',
        quantity:3,
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, animi?'
    },
    {
        name:'Juice12',
        date:'22-01-2021',
        price:'183',
        img:'https://png.pngtree.com/png-vector/20191207/ourmid/pngtree-glass-of-orange-juice-illustration-vector-on-white-background-png-image_2043835.jpg',
        id:'#23234234',
        category:'beverages',
        quantity:3,
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, animi?'
    },
    {
        name:'Juice12',
        date:'232-01-2021',
        price:'183',
        img:'https://png.pngtree.com/png-vector/20191207/ourmid/pngtree-glass-of-orange-juice-illustration-vector-on-white-background-png-image_2043835.jpg',
        id:'#23234234',
        category:'beverages',
        quantity:3,
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, animi?'
    }
]

    const renderOrder = (order) => (
        <Paper className="order-card fade-in ">
        <CardMedia image={order.img} className="order-img" />
        <CardContent className="cart-content">
          <Grid item xs={8} >
            <p className="cart-prod-name"><span className='order-values'>{order.name}</span></p>
            <p className="short-description-order">< span className='order-values'>{order.description}</span></p>
            <p className="short-description-order">
              Quantity : < span className='order-values'>{order.quantity}</span>
            </p>
            <p className="short-description-order">
              Date : < span className='order-values'>{order.date} </span>
            </p>
          </Grid>
          <Grid item xs={4} className="price">
            <span className="order-mrp"> 
              <p>&#8377;{order.price}</p>
            </span>
          </Grid>
        </CardContent>
      </Paper>
    )

    return(
        mockOrder?.map(order => order && renderOrder(order))    
    )
}
export default UserOrders;