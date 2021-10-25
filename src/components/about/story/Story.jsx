import { Grid } from "@material-ui/core";
import React from "react";
import "./story.css";

const Story = () => {
  return (
    <Grid container className="story" spacing={0}
    data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="800"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center"
    >
      <Grid item md={6} className="story-image">
        <img src="images/story.jpg" className="our-story-img" />
      </Grid>
      <Grid item md={6} className="story-content">
        <h1 className="story-header">Our Story</h1>
        <div className="story-text">
          <hr className="line-why-us" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          repellendus laudantium debitis inventore esse. Corporis quisquam eius
          itaque hic nulla eum sed, sit odit libero voluptates soluta quasi
          laborum nemo. Mollit enim velit nisi pariatur tempor sint. <br />
          <br />
          Dolor adipisicing laborum consectetur fugiat do eiusmod aute pariatur
          quis esse in quis commodo. Ex aliquip sit cillum sunt eu ut voluptate
          ullamco ex officia consectetur aute sit velit. Ex sint ctur quis esse
          in quis commodo. Ex aliquip sit cillum sunt eu ut voluptate ullamco ex
          officia consectetur aute sit velit. Ex sint consectetur duis irure
          mollit eu dolore et qui ea. Cupidatat tempor fugiat consequat aliqua
          magna eiusmod anim in amet fugiat. Sint enim ipsum id commodo et.
          <br />
          <br />
          <hr className="line-why-us" />
        </div>
      </Grid>
    </Grid>
  );
};

export default Story;
