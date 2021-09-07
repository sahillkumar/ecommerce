import { Grid } from '@material-ui/core'
import React from 'react'
import './story.css'

const Story = () => {
    return (
        <Grid container className="story" spacing={0}>
            <Grid item md={6} className="story-image">
                <img src="images/story.jpg"  className="our-story-img"/>
            </Grid>
            <Grid item md={6} className="story-content">
                <h1 className="story-header">Our Story</h1>
                <div className="story-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus laudantium debitis inventore esse. Corporis quisquam eius itaque hic nulla eum sed, sit odit libero voluptates soluta quasi laborum nemo.
                    Mollit enim velit nisi pariatur tempor sint. Dolor adipisicing laborum consectetur fugiat do eiusmod aute pariatur quis esse in quis commodo. Ex aliquip sit cillum sunt eu ut voluptate ullamco ex officia consectetur aute sit velit. Ex sint ctur quis esse in quis commodo. Ex aliquip sit cillum sunt eu ut voluptate ullamco ex officia consectetur aute sit velit. Ex sint consectetur duis irure mollit eu dolore et qui ea. Cupidatat tempor fugiat consequat aliqua magna eiusmod anim in amet fugiat. Sint enim ipsum id commodo et.

                    Enim deserunt nisi elit occaecat eiusmod. Non duis ex aute adipisicing ex irure in quis. Exercitation labore nostrud enim id duis. Cillum esse dolor laboris ex.onsectetur duis irure mollit eu dolore et qui ea. Cupidatat tempor fugiat consequat aliqua magna eiusmod anim in amet fugiat. Sint enim ipsum id commodo et.

                    Enim deserunt nisi elit occaecat eiusmod. Non duis ex aute adipisicing ex irure in quis. Exercitation labore nostrud enim id duis. Cillum esse dolor laboris ex.

                </div>
            </Grid>
        </Grid>
    )
}

export default Story
