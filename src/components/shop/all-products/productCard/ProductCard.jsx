import React from 'react'
import { CardActionArea, CardContent, CardMedia, Card, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'
import './productCard.css'


const ProductCard = ({product}) => {
    return ( 
        <Link>
            <Card className="product">
                <CardActionArea>
                    <CardMedia
                        image={require(`../../../../../public/${product.image}`)}
                        className="prod-img"
                    /> 
                    <CardContent className ="prod-content">
                        <Typography className="prod-text">{product.name}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
       
    )
}

export default ProductCard
