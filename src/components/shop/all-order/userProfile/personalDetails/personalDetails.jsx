import React, { useState } from "react";
import { Button, Grid, Paper, Typography, TextField } from "@material-ui/core";
import "./personalDetailsStyles.css";

const PersonalDetails = () => {
  const [userDetails, setUserDetails] = useState({
    "First Name": "",
    "Last Name": "",
    Phone: "",
    "Street Address": "",
    City: "",
    Zip: "",
  });
  const handleSubmit = () => {
    console.log(userDetails);
  };

  return (
    <Grid container className="personalDetailsContainer" spacing={0}>
      <Grid item xs={5}>
        <TextField
          id="outlined-multiline-flexible"
          label="First Name"
          maxRows={4}
          variant="outlined"
          className="userInput"
          onChange={(e) =>
            setUserDetails({ ...userDetails, "First Name": e.target.value })
          }
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          id="outlined-multiline-flexible"
          label="Last Name"
          maxRows={4}
          variant="outlined"
          className="userInput"
          onChange={(e) =>
            setUserDetails({ ...userDetails, "Last Name": e.target.value })
          }
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          id="outlined-multiline-flexible"
          label="Phone"
          maxRows={4}
          variant="outlined"
          className="userInput"
          onChange={(e) =>
            setUserDetails({ ...userDetails, "First Name": e.target.value })
          }
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          id="outlined-multiline-flexible"
          label="Street Address"
          maxRows={4}
          variant="outlined"
          className="userInput"
          onChange={(e) =>
            setUserDetails({ ...userDetails, "Street Address": e.target.value })
          }
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          id="outlined-multiline-flexible"
          label="City"
          maxRows={4}
          variant="outlined"
          className="userInput"
          onChange={(e) =>
            setUserDetails({ ...userDetails, City: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          id="outlined-multiline-flexible"
          label="Zip Code"
          maxRows={4}
          variant="outlined"
          className="userInput"
          onChange={(e) =>
            setUserDetails({ ...userDetails, "Zip Code": e.target.value })
          }
        />
      </Grid>

      <Grid item xs={10}>
        <Button variant="contained" onClick={() => handleSubmit()}>
          Save
        </Button>
      </Grid>
    </Grid>
  );
};
export default PersonalDetails;
