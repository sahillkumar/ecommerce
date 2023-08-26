import { Grid } from "@material-ui/core";
import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <Grid
      container
      className="contact"
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
        <h1 className="story-header">Our Mission</h1>
        <div className="story-text">
          <ul>
            <li>Be the best and genuine Brand in Organic Field</li> <br />
            <li>
              Be the kind of a brand in which people can blindly trust
            </li>{" "}
            <br />
            <li>
              Source every kind of Natural and Organic Products and make them
              available for the society
            </li>
            <br/>
            <li>
            To take care of life and health of people internally and externally, and make the society aware about the benefits of using organic and natural products as against the harmful effects of chemicalized and adulterated products.
            </li>
            <br />
            <br />
          </ul>
        </div>
      </Grid>
    </Grid>
  );
};

export default Contact;
