import React, { useContext,useEffect,useState } from "react";
import { CardContent, CardMedia, Card, Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./productCard.css";
import AddShoppingCartSharpIcon from "@material-ui/icons/AddShoppingCartSharp";
import { addItemToCart, addItemToWishlist, removeItemFromCart, removeItemFromWishlist } from "../../all-order/cartHelper/cartHelper";

import { DataContext } from "../../../../context";
import { Favorite, FavoriteBorderTwoTone, ShoppingCart } from "@material-ui/icons";

const ProductCard = ({ product}) => {

  const wishlist = JSON.parse (localStorage.getItem('wishlist'))
  const cart = JSON.parse (localStorage.getItem('cart'))
  const  [wish, setWish] = useState()
  const [prodCart, setProdCart] = useState()
  const { user } = useContext(DataContext);

  useEffect(() => {
    setWish(wishlist.includes(product.id))
    setProdCart(cart.includes(product.id))
  }, [])

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


  return (
    <Card className="product fade-in ">
      <Link to={`/shop/${product.id}`}>
        <CardMedia image={product.picUrl} className="prod-img " />
      </Link>
      <CardContent className="prod-content">
        <strong className="prod-name">{product.name}</strong>
        <strong className="short-description">short Descrption...</strong>
        <div className="price">
          <span className="prod-discount">&#8377;{product.discountMrp}</span>
          <span className="prod-mrp">
            <del>&#8377;{product.mrp}</del>
          </span>
          <span className="discount-percent">
            ({product.discountPercentage}%)
          </span>
          {
            prodCart ?
            <button
            className="addtocart"
            onClick={() => removeFromCart(product)}
            style={{ color:"#111"}}
          >
            <Tooltip title="Already in Cart" placement="bottom-start">
              <ShoppingCart fontSize="large" />
            </Tooltip>
          </button> : <button
            className="addtocart"
            onClick={() => handleAddToCart(product)}
          >
            <Tooltip title="Add to Cart" placement="bottom-start">
              <AddShoppingCartSharpIcon fontSize="large" />
            </Tooltip>
          </button>
          }
         
         
          {
            wish ?
            <button className="favorite" style={{ color:'red'}} onClick={() => removeFromWishlist(product)}>
              <Tooltip title="Wishlisted" placement="bottom-start">
                <Favorite fontSize="large" />
              </Tooltip>
          </button> :
            <button className="favorite" onClick={() => handleAddToWishlist(product)}>
              <Tooltip title="Add to wishlist" placement="bottom-start">
                <FavoriteBorderTwoTone fontSize="large" />
              </Tooltip>
          </button>
          }
          
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
