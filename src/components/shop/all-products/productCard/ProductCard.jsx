import React from 'react'
import { CardActionArea, CardContent, CardMedia, Card, Typography, Tooltip} from '@material-ui/core'
import { Link } from 'react-router-dom'
import './productCard.css'
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { addItemToCart } from '../../all-order/cart/cartHelper';

const ProductCard = ({product}) => {

    const handleAddToCart = (product) => () =>{
        addItemToCart(product)
        console.log('added');
    }

    return ( 
        <Link>
            <Card className="product fade-in ">
                <CardMedia
                    image={product.picUrl}
                    className="prod-img "
                >
                    <span className="favorite">
                        <Tooltip title="Add to favorites"  placement="bottom-start">
                            <FavoriteIcon fontSize="large"/>
                        </Tooltip>
                    </span>
                </CardMedia>
                <CardContent className ="prod-content">
                    <strong className="prod-name">
                        {product.name}
                    </strong>
                    <strong className="short-description">
                        short Descrption....
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
                        <span className="addtocart">
                            <Tooltip title="Add to Cart"  placement="bottom-start">
                                <AddShoppingCartSharpIcon fontSize="large" onClick={handleAddToCart(product)} />
                            </Tooltip>
                        </span>
                    </div>
                </CardContent>
               
               
            </Card>
        </Link>
       
    )
}

export default ProductCard