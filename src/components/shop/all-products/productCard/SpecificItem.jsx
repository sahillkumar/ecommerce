import React, { useState, useContext,useEffect } from "react";
import "./specificItem.css";
import { Link, useParams } from "react-router-dom";
import { getProductByID } from "../../shopHelper/shopHelper";
import { Grid } from "@material-ui/core";
import { DataContext } from "../../../../context";
import {
  addItemToCart,
  removeItemFromCart,
  addItemToWishlist,
  removeItemFromWishlist,
} from "../../all-order/cartHelper/cartHelper";
// import moment from "moment";

const SpecificItem = () => {
  const [product, setProduct] = useState(null);
  const { user } = useContext(DataContext);
  const wishlist = JSON.parse (localStorage.getItem('wishlist'))
  const cart = JSON.parse (localStorage.getItem('cart'))
  const  [wish, setWish] = useState()
  const [prodCart, setProdCart] = useState()

  useEffect(() => {
    if(product && cart && wishlist){
      setWish(wishlist.includes(product.id))
      setProdCart(cart.includes(product.id))
    }
  
  }, [product])

 
  const handleAddToCart = (product) => {
    if (user == null) {
      alert("Please Login First !");
    } else {
      setProdCart(true)
      addItemToCart(product, user.userId);
    }
  };

  const removeFromCart = (prod) => {
    setProdCart(false)
    removeItemFromCart(user.userId, prod.id);
  };

  const handleAddToWishlist = (product)=>{
    if(user === null){
      alert("Please login First !")
      return
    }
    setWish(true)
    addItemToWishlist(product,user.userId)
  }

  const removeFromWishlist = (prod) => {
    setWish(false)
    removeItemFromWishlist(user.userId, prod.id);
  };


  const getItem = async (id) => {
    const prod = await getProductByID(id);

    if (product === null) setProduct(prod);
  };
  let id = useParams().id;
  if (!product) getItem(id);

  const renderProd = (prod) => {
    return (
      <Grid container className="spec-prod" spacing={0}>
        <Grid item md={6} className="spec-image">
          <img src={prod.picUrl} className="spec-img" />
        </Grid>
        <Grid item md={6} className="spec-content">
          <div className="spec-text">
            <div className="prodDetails">
              <h1 className="product-name">{prod.name.toUpperCase()}</h1>
              <p className="prod-det">{prod.details}</p>
              <div className="det">
                <p>
                  Original Price <span className="data">₹{product.mrp}</span>
                </p>
                <p>
                  Discount Percentage{" "}
                  <span className="data">
                    {product.discountPercentage}% off
                  </span>
                </p>
                <p>
                  Discount Price{" "}
                  <span className="data">
                    ₹{product.mrp * (1 - product.discountPercentage / 100)}
                  </span>
                </p>
                <p>
                  Sold By <span className="data">The Organic Tree</span>
                </p>
                <p>
                  Estimate Delivery{" "}
                  <span className="data">
                    {/* {moment().add(5, "days").format("MMMM Do YYYY")} */}
                  </span>
                </p>
              </div>
              <div className="buttons">
                {
                  prodCart ?     
                  <button onClick={() => handleAddToCart(prod)}>ALREADY IN CART</button>
                 : <Link to="/cart">
                  <button onClick={() => handleAddToCart(prod)}>BUY NOW</button>
                </Link> 
                }
            
                {
                  wish ? <button onClick={() => removeFromWishlist(prod)}>
                  WISHLISTED
                </button> :
                  <button onClick={() => handleAddToWishlist(prod)}>
                  ADD TO WISHLIST
                </button>
                }
                
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  };

  return <>{product ? renderProd(product) : <h2>dhtt bc</h2>}</>;
};
export default SpecificItem;
/*
const {id} = useParams();
    
    //let documents = [];
    //const docs = await firestore.collection('PRODUCTS')
    const [prodDets, setProdDets] = useState([])
    //const docs = []
    /*useEffect(()=>{
        //load hospitals into hospitalsList
        
        firestore.collection('PRODUCTS').get()
            .then(response => {
                response.docs.forEach(item => {
                    let currentID = item.id
                    let appObj = { ...item.data(), ['id']: currentID }
                    docs.push(appObj)

                    docs.push(item.data())
            })
            setProdDets(docs)
        })
    },[])
    */
