import { CardActionArea, CardContent, CardMedia, Card, Typography} from '@material-ui/core'
import React from 'react'
import './category.css'

const Category = ({category}) => {
    console.log(category.image);
    return (
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
    )
}

export default Category
