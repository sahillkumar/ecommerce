import { Grid } from '@material-ui/core'
import React from 'react'
import './whyus.css'

const WhyUs = () => {
    return (
        <Grid container className="whyus" spacing={0}>
               <Grid item md={6} className="whyus-content">
                <h1 className="whyus-header">Why OrganiKart ?</h1>
                <div className="whyus-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus laudantium debitis inventore esse. Corporis quisquam eius itaque hic nulla eum sed, sit odit libero voluptates soluta quasi laborum nemo.
                    Mollit enim velit nisi pariatur tempor sint. Dolor adipisicing laborum consectetur fugiat do eiusmod aute pariatur quis esse in quis commodo. Ex aliquip sit cillum sunt eu ut voluptate ullamco ex officia consectetur aute sit velit. Ex sint ctur quis esse in quis commodo. Ex aliquip sit cillum sunt eu ut voluptate ullamco ex officia consectetur aute sit velit. Ex sint consectetur duis irure mollit eu dolore et qui ea. Cupidatat tempor fugiat consequat aliqua magna eiusmod anim in amet fugiat. Sint enim ipsum id commodo et.

                    Enim deserunt nisi elit occaecat eiusmod. Non duis ex aute adipisicing ex irure in quis. Exercitation labore nostrud enim id duis. Cillum esse dolor laboris ex.onsectetur duis irure mollit eu dolore et qui ea. Cupidatat tempor fugiat consequat aliqua magna eiusmod anim in amet fugiat. Sint enim ipsum id commodo et.

                    Enim deserunt nisi elit occaecat eiusmod. Non duis ex aute adipisicing ex irure in quis. Exercitation labore nostrud enim id duis. Cillum esse dolor laboris ex.

                </div>
            </Grid>
        
            <Grid item md={6} className="whyux-image">
                <img src="images/whyusbg.jpg"  className="whyus-img"/>
            </Grid>
         </Grid>
    )
}

export default WhyUs
