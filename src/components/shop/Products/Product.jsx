import React from 'react'
import { CardActionArea, CardContent, CardMedia, Card, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'


const Product = ({product}) => {
    return ( 
        <Link>
        <Card className="product">
            <CardActionArea>
                <CardMedia
                    image={product.image}
                    className="prod-img"
                />
                    
                <CardContent className ="card-content">
                    <Typography className="card-text">{product.name}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Link>
    )
}

export default Product
