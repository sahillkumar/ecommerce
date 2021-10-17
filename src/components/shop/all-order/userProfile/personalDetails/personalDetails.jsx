import React, { useState, useEffect, useRef } from "react";
import { Button, Grid, Paper, Typography, TextField } from "@material-ui/core";
import "./personalDetailsStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAstronaut,
  faEdit,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import {fetchUserDetails, saveUserDetails} from './personalDetails-helper'


const PersonalDetails = () => {
  const { displayName, email, phone, address, city, zip, userId } = JSON.parse(
    localStorage.getItem("user")
  );
  const [userDetails, setUserDetails] = useState({
    userId,
    displayName,
    email,
    phone,
    address,
    city,
    zip,
  });

  const [formDisabled, setFormDisabled] = useState(true);

  const handleForm = (e) => {
    e.preventDefault();
    if (formDisabled) setFormDisabled(false);
    else {
      // save data to backend
      localStorage.setItem("user", JSON.stringify(userDetails));
      saveUserDetails(userId, userDetails);
      setFormDisabled(true);
    }
  };

  return (
    <form onSubmit={handleForm}>
      <Grid container className="personalDetailsContainer fade-in" spacing={0}>
        <Grid item xs={10}>
          <FontAwesomeIcon size="3x" icon={faUserAstronaut} />
        </Grid>

        <Grid item xs={5}>
          <TextField
            defaultValue={userDetails.displayName}
            disabled={formDisabled}
            id="outlined-multiline-flexible"
            label="Name"
            maxRows={4}
            variant="outlined"
            className="userInput"
            onChange={(e) =>
              setUserDetails({ ...userDetails, displayName: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            defaultValue={userDetails.email}
            disabled={formDisabled}
            id="outlined-multiline-flexible"
            label="Mail"
            maxRows={4}
            variant="outlined"
            className="userInput"
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            defaultValue={userDetails.phone ? userDetails.phone : ""}
            inputProps={{
              pattern: "[6789][0-9]{9}",
            }}
            disabled={formDisabled}
            id="outlined-multiline-flexible"
            label="Phone"
            maxRows={4}
            variant="outlined"
            className="userInput"
            onChange={(e) =>
              setUserDetails({ ...userDetails, phone: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            defaultValue={userDetails.address ? userDetails.address : ""}
            disabled={formDisabled}
            id="outlined-multiline-flexible"
            label="Street Address"
            maxRows={4}
            variant="outlined"
            className="userInput"
            onChange={(e) =>
              setUserDetails({ ...userDetails, address: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            defaultValue={userDetails.city ? userDetails.city : ""}
            disabled={formDisabled}
            id="outlined-multiline-flexible"
            label="City"
            maxRows={4}
            variant="outlined"
            className="userInput"
            onChange={(e) =>
              setUserDetails({ ...userDetails, city: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            defaultValue={userDetails.zip ? userDetails.zip : ""}
            inputProps={{
              pattern: "[0-9]{6}",
              maxLength: 6,
            }}
            disabled={formDisabled}
            id="outlined-multiline-flexible"
            label="Zip Code"
            maxRows={4}
            variant="outlined"
            className="userInput"
            onChange={(e) =>
              setUserDetails({ ...userDetails, zip: e.target.value })
            }
          />
        </Grid>

        <Grid item xs={10}>
          {formDisabled ? (
            <button
              className = 'btn-edit'
              onClick={() => setFormDisabled(false)}
            >
              CLICK TO EDIT{" "}
              <FontAwesomeIcon icon={faEdit} style={{ marginLeft: "1em" }} />
            </button>
          ) : (
            <Button
              variant="contained"
              type="Submit"
              style={{
                backgroundColor:'#66bb6a',
                color:'white',
                height: "2.3em",
                minWidth: "3em",
                fontFamily: "Courier New (monospace)",
                fontWeight: "600",
              }}
            >
              Save{" "}
              <FontAwesomeIcon icon={faSave} style={{ marginLeft: "1em" }} />
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
};
export default PersonalDetails;
