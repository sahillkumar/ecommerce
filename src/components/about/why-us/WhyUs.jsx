import { Grid } from "@material-ui/core";
import React from "react";
import "./whyus.css";

const WhyUs = () => {
  return (
    <Grid
      container
      className="whyus"
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
      <Grid item md={6} className="whyus-content">
        <h1 className="story-header">Why Organikart ?</h1>
        <div className="whyus-text">
          <hr className="line-why-us" />
          Organikart is an initiative to encourage a responsiible, healthy and
          better lifestyle around the world by promoting organic and concious
          food collected from farmers across India.
          <br />
          <br />
          We work sincerely to bring the freshest and finest quality products to
          our customers. Our objective is to provide the best sensory experience
          for all human senses. Our products look good when you see them. Smell
          good when you smell them. Feel good when you touch them. Taste good
          when you taste them.
          <br />
          <br />
          We work to facilitate a more direct relationship between the consumer
          and the farmers, This relationship is a result of our sincere effort
          to ensure the purity of the product as it changes hands between the
          farmer and th consumer.
        </div>
        <hr className="line-why-us" />
      </Grid>

      <Grid item md={6} className="whyux-image">
        <img src="images/whyusbg.jpg" className="our-story-img" />
      </Grid>
    </Grid>
  );
};

export default WhyUs;
