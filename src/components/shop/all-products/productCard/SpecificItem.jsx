import React, { useState, useContext } from "react";
import "./specificItem.css";
import { useParams } from "react-router-dom";
import { getProductByID } from "../../shopHelper/shopHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { addItemToCart } from '../../all-order/cardhelper/cartHelper';
import { DataContext } from '../../../../context';

const SpecificItem = () => {
  const [product, setProduct] = useState(null);
  const {user} = useContext(DataContext)
    

    const handleAddToCart = (product) => () =>{
        addItemToCart(product,user.uid)
    }


  const getItem = async (id) => {
    const prod = await getProductByID(id);

    if (product === null) setProduct(prod);
  };
  let id = useParams().id;
  if (!product) getItem(id);

  const renderProd = (prod) => {
    return (
      <div className="itemGrid">
        <div className="img-container">
          <img src={prod.picUrl} alt="" />
        </div>
        <div className="prodDetails">
          <h1>{prod.name.toUpperCase()}</h1>
          <p>{prod.description}</p>
          <div className = 'cost'>
            <h4>{product.discountPercentage}% off</h4>
            <div className = 'prodPrice'>
              <p>MRP  ₹ {product.mrp}</p>
              <p>BUY AT ₹ {product.mrp*(1-product.discountPercentage/100)}</p>
            </div>
          </div>
          <div className="buttons">
            <button>
              <FontAwesomeIcon icon={faCartPlus} onClick = {()=>handleAddToCart(prod.id)}/>
            </button>
            <button>
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </div>
      </div>
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
