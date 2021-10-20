import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Paper,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import "./userOrdersStyle.css";
import { fetchAllOrders, addToOrders } from "./ordersHelper.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBag} from '@fortawesome/free-solid-svg-icons'
const UserOrders = () => {
  let mockOrder = [
    {
      name: "Juice",
      date: "20-01-2021",
      price: "123",
      img: "https://png.pngtree.com/png-vector/20191207/ourmid/pngtree-glass-of-orange-juice-illustration-vector-on-white-background-png-image_2043835.jpg",
      id: "#23234234",
      category: "beverages",
      quantity: 3,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, animi?",
    },
    {
      name: "Juice12",
      date: "22-01-2021",
      price: "183",
      img: "https://png.pngtree.com/png-vector/20191207/ourmid/pngtree-glass-of-orange-juice-illustration-vector-on-white-background-png-image_2043835.jpg",
      id: "#23234234",
      category: "beverages",
      quantity: 3,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, animi?",
    },
    {
      name: "Juice12",
      date: "22-01-2021",
      price: "183",
      img: "https://png.pngtree.com/png-vector/20191207/ourmid/pngtree-glass-of-orange-juice-illustration-vector-on-white-background-png-image_2043835.jpg",
      id: "#23234234",
      category: "beverages",
      quantity: 3,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, animi?",
    },
    {
      name: "Juice12",
      date: "22-01-2021",
      price: "183",
      img: "https://png.pngtree.com/png-vector/20191207/ourmid/pngtree-glass-of-orange-juice-illustration-vector-on-white-background-png-image_2043835.jpg",
      id: "#23234234",
      category: "beverages",
      quantity: 3,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, animi?",
    },
    {
      name: "Juice12",
      date: "232-01-2021",
      price: "183",
      img: "https://png.pngtree.com/png-vector/20191207/ourmid/pngtree-glass-of-orange-juice-illustration-vector-on-white-background-png-image_2043835.jpg",
      id: "#23234234",
      category: "beverages",
      quantity: 3,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, animi?",
    },
  ];

  const [orders, setOrders] = useState([]);
  const userOrders = async (userId) => {
    const orders = await fetchAllOrders(userId);
    console.log("orders fetched = ", orders);
    setOrders(orders);
  };

  useEffect(() => {
    const { userId } = JSON.parse(localStorage.getItem("user"));
    userOrders(userId);
  }, []);

  const renderOrder = (order) => (
    <Paper className="order-card fade-in ">
      {console.log("order =", order)}
      <CardMedia image={order.picUrl} className="order-img" />
      <CardContent className="cart-content">
        <Grid item xs={8}>
          <p className="cart-prod-name">
            <span className="order-values prod-name">{order.name}</span>
          </p>
          <p className="short-description-order">
            <span className="order-values">{order.description}</span>
          </p>
          {<p className="short-description-order">
            Info : <span className="order-values">{order?.details?.substring(0, 45)} </span>
  </p>}
        </Grid>
        <Grid item xs={4} className="price">
          <span className="order-mrp">
            <p>&#8377;{order.mrp}</p>
          </span>
        </Grid>
      </CardContent>
    </Paper>
  );

  return (
    <Grid className = 'order-container'>
      <p className = 'your-odrs'>
        Your Orders
      </p>

      {orders?.map((order) => order?.map((ord) => renderOrder(ord)))}
      {orders.length < 1 && 
      <div className = "no-orders" >
        <h3>You haven't placed any orders yet.</h3>
        <img className = 'fade-in' src="https://cdn.dribbble.com/users/721524/screenshots/4112199/media/1f1357e2a1886218a716c24a0d15462b.png?compress=1&resize=400x300" alt="img-empty-order"/>
      </div>}
    </Grid>
  );
};
export default UserOrders;
