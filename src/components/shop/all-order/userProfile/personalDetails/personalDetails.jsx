import React, { useState } from "react";
import { Button, Grid, Paper, Typography, TextField } from "@material-ui/core";
import "./personalDetailsStyles.css";

const PersonalDetails = () => {
 
  const inputs = ['First Name', 'Last Name', 'Phone', 'Street Address', 'City', 'Zip'];
  return (
    <Grid container className="personalDetailsContainer" spacing={0}>
       {
           inputs.map((field, index) => (
            <Grid item xs={5}>
                <TextField
                    id="outlined-multiline-flexible"
                    label = {field}
                    maxRows={4}
                    variant = 'outlined'
                    className = 'userInput'
                />
            </Grid>
        ))
       }

       <Grid item xs = {10}>
           <Button variant="contained" >
               Save
           </Button>
       </Grid>
    </Grid>
  );
};
export default PersonalDetails;
