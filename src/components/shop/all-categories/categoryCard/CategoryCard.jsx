import { CardActionArea, CardContent, CardMedia, Card, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom';

import React from 'react'
import './categoryCard.css'

const CategoryCard = ({category}) => {
    return (
        <Link to={`/shop/${category.name}`}>
            <Card className="category fade-in " id="cat">
                <CardActionArea>
                    <CardMedia
                        image={category.image}
                        className="cat-img zoom"
                    />
                    <CardContent className ="cat-content" >
                        <Typography className="cat-text">{category.name}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
        
    )
}

export default CategoryCard
