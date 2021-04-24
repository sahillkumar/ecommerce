import React, { useContext } from 'react'
import {  CardContent, CardMedia, Card, Tooltip} from '@material-ui/core'
import { Link } from 'react-router-dom'
import './productCard.css'
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { addItemToCart } from '../../all-order/cartHelper/cartHelper';

import { DataContext } from '../../../../context';

const ProductCard = ({product}) => {

    const {user} = useContext(DataContext)

    const handleAddToCart = (product) =>{
        if(user == null){
            alert('Please Login First !')
        }else{
            addItemToCart(product,user.userId)
        }
        
    }

    return ( 
        
            <Card className="product fade-in ">
                <Link to = {`/shop/${product.id}`} >
                <CardMedia
                    image={product.picUrl}
                    className="prod-img ">

                    <span className="favorite">
                        <Tooltip title="Add to favorites"  placement="bottom-start">
                            <FavoriteIcon fontSize="large"/>
                        </Tooltip>
                    </span>

                </CardMedia>
                </Link>
                <CardContent className ="prod-content">
                    <strong className="prod-name">
                        {product.name}
                    </strong>
                    <strong className="short-description">
                        short Descrption...
                    </strong>
                    <div className='price'>
                        <span className="prod-discount">
                            &#8377;{product.discountMrp}
                        </span>
                        <span className="prod-mrp">
                            <del>&#8377;{product.mrp}</del>
                        </span>
                        <span className="discount-percent">
                            ({product.discountPercentage}%)
                        </span>
                        <button 
                            className="addtocart" 
                            onClick={()=>handleAddToCart(product)}
                        >
                            <Tooltip title="Add to Cart"  placement="bottom-start">
                                <AddShoppingCartSharpIcon 
                                    fontSize="large" 
                                    />
                            </Tooltip>
                        </button>
                    </div>
                </CardContent>
            </Card>
        
       
    )
}

export default ProductCard
