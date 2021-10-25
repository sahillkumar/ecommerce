import { Grid } from "@material-ui/core";
import React from "react";
import "./story.css";

const Story = () => {
  return (
    <Grid
      container
      className="story"
      spacing={0}
      data-aos="fade-up"
      data-aos-offset="0"
      data-aos-delay="0"
      data-aos-duration="800"
      data-aos-easing="ease-out"
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
          <strong>Vocal for Local</strong> - creating a source of income for the
          hill farmer who are migrating to metro cities for jobs.
          <br />
          <br />
          <strong>Raising awareness</strong> among the city people regarding the
          benefits of locally grown organic product.
          <br />
          <br />
          <strong>Promoting the state culture.</strong>
          <br />
          <br />
          We intend to bring together a wide range of products such as the local
          organic food ,handcraft, etc. most of which are only seen in the hills
          to generate sustainable livelihood for the community.
          <br />
          <br />
          <hr className="line-why-us" />
        </div>
      </Grid>
    </Grid>
  );
};

export default Story;
