import React, { useState, useContext } from "react";
import "./specificItem.css";
import { useParams } from "react-router-dom";
import { getProductByID } from "../../shopHelper/shopHelper";
import { Grid } from '@material-ui/core'
import { DataContext } from '../../../../context';
import { addItemToCart } from "../../all-order/cartHelper/cartHelper";
import moment from 'moment';


const SpecificItem = () => {
  const [product, setProduct] = useState(null);
  const {user} = useContext(DataContext)
    

    const handleAddToCart = (product) =>{
        if(user == null){
          alert('Please Login First !')
      }else{
          addItemToCart(product,user.userId)
      }
    }


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
          <img src={prod.picUrl}  className="spec-img"/>
      </Grid>
      <Grid item md={6} className="spec-content">
        <div className="spec-text">
          <div className="prodDetails">
            <h1 className="product-name">{prod.name.toUpperCase()}</h1>
            <p className="prod-det">{prod.details}</p>
            <div className="det">
              <p>Original Price <span className="data" >₹{product.mrp}</span></p>
              <p>Discount Percentage <span className="data" >{product.discountPercentage}% off</span></p>
              <p>Discount Price <span className="data" >₹{product.mrp*(1-product.discountPercentage/100)}</span></p>
              <p>Sold By <span className="data" >The Organic Tree</span></p>
              <p>Estimate Deivery <span className="data">{moment().add(5,'days').format("MMMM Do YYYY")}</span></p>
            </div>
            <div className="buttons">
              <button onClick = {()=>handleAddToCart(prod.id)}>
                BUY NOW
              </button>
              <button>
                ADD TO WISHLIST
              </button>
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


   

