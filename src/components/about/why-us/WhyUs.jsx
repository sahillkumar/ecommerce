import { Grid } from '@material-ui/core'
import React from 'react'
import './whyus.css'

const WhyUs = () => {
    return (
        <Grid container className="whyus" spacing={0}
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        >
               <Grid item md={6} className="whyus-content">
                <h1 className="story-header">Why Organikart ?</h1>
                <div className="whyus-text">
                    <hr className = 'line-why-us'/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellendus laudantium debitis inventore esse. Corporis quisquam eius itaque hic nulla eum sed, sit odit libero voluptates soluta quasi laborum nemo.
                    Mollit enim velit nisi pariatur tempor sint. Dolor adipisicing laborum consectetur fugiat do eiusmod aute pariatur quis esse in quis commodo. Ex aliquip sit cillum sunt eu ut voluptate ullamco ex officia consectetur aute sit velit.<br/> <br/> Ex sint ctur quis esse in quis commodo. Ex aliquip sit cillum sunt eu ut voluptate ullamco ex officia consectetur aute sit velit. Ex sint consectetur duis irure mollit eu dolore et qui ea. Cupidatat tempor fugiat consequat aliqua magna eiusmod anim in amet fugiat. Sint enim ipsum id commodo et.
                    <br/><br/>
                    Enim deserunt nisi elit occaecat eiusmod. Non duis ex aute adipisicing ex irure in quis. Exercitation labore nostrud enim id duis. Cillum esse dolor laboris ex.onsectetur duis irure mollit eu dolore et qui ea. Cupidatat tempor fugiat consequat aliqua magna eiusmod anim in amet fugiat. Sint enim ipsum id commodo et.

                </div>
                <hr className = 'line-why-us'/>
            </Grid>
        
            <Grid item md={6} className="whyux-image">
                <img src="images/whyusbg.jpg"  className="our-story-img"/>
            </Grid>
         </Grid>
    )
}

export default WhyUs
