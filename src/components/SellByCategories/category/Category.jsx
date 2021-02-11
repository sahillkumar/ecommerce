import { CardActionArea, CardContent, CardMedia, Card, Typography} from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import './category.css'

const Category = ({category}) => {
    return (
        <Link to={`/shop/${category.name}`}>
            <Card className="category">
                <CardActionArea>
                    <CardMedia
                        image={category.image}
                        className="card-img"
                    />
                        
                    <CardContent className ="card-content">
                        <Typography className="card-text">{category.name}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
        
    )
}

export default Category
