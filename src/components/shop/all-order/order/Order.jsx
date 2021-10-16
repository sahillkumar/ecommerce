import { Button, Grid, Paper } from "@material-ui/core";
import React, { useContext, useState } from "react";
import CssTextField from "../../../Reusable Components/CssTextField";
import "./order.css";
import { displayRazorPay } from "../payment/paymentHelper";
import { DataContext } from "../../../../context";
import { useEffect } from "react";
import { useHistory } from "react-router";
function Order() {
  const { productsincart, amount } = useContext(DataContext);
  
  const user = JSON.parse(localStorage.getItem("user"));
  const [delDetails, setDelDetails] = useState({
    name: user.displayName,
    email: user.email,
    phone: user.phone,
    city: user.city,
    street: user.address,
    pincode: user.zip,
  });

  let history = useHistory();

  const [thankyou, setThankyou] = useState(false);

  const [err, setErr] = useState(false);

  const { 
    phone,
    paymentType,
    house,
    state,
    city,
    street,
    landmark,
    pincode,
    name,
    email,
  } = delDetails;

  const handleChange =
    (name) =>
    ({ target: { value } }) => {
      setErr(false);
      setDelDetails({
        ...delDetails,
        [name]: value,
      });
      console.log('del details = ', delDetails);
    };

  useEffect(() => {
    if (thankyou) {
      history.push("/shop/success");
    }
  }, [thankyou]);

  const handleSubmit = (e) => {
    e.preventDefault();
    displayRazorPay(
      user,
      delDetails,
      productsincart,
      setDelDetails,
      setThankyou,
      amount
    );
  };

  return (
    <div className="order">
      <Paper className="place-order">
        <h3 className="brand-header">Organikart</h3>
        <form onSubmit={handleSubmit}>
          <Grid className="personal" spacing={2}>
            <CssTextField
              disabled
              margin="normal"
              variant="outlined"
              id="name"
              value={name}
              label="Name"
              type="String"
              className="name"
            />
            <CssTextField
              disabled
              variant="outlined"
              margin="normal"
              id="email"
              value={email}
              label="Email"
              type="email"
              className="email"
            />
            <CssTextField
              required
              margin="normal"
              id="phone"
              variant="outlined"
              value={phone}
              label="Phone No."
              type="tel"
              onChange={handleChange("phone")}
              className="phone"
              inputProps={{
                pattern: "[6789][0-9]{9}",
              }}
            />

            <CssTextField
              required
              margin="normal"
              id="street"
              value={street}
              label="Street"
              type="String"
              variant="outlined"
              onChange={handleChange("street")}
              className="street"
            />

            <CssTextField
              required
              margin="normal"
              id="city"
              variant="outlined"
              value={city}
              label="City"
              type="String"
              onChange={handleChange("city")}
              className="city"
            />
            <CssTextField
              required
              margin="normal"
              id="pincode"
              value={pincode}
              variant="outlined"
              label="pincode"
              type="String"
              onChange={handleChange("pincode")}
              className="pincode"
              inputProps={{
                pattern: "[0-9]{6}",
                maxLength: 6,
              }}
            />
          </Grid>
          <Button
            variant="contained"
            className="confirm-order"
            type="submit"
            style={{ marginTop: "2.5em" }}
          >
            Confirm & Proceed
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default Order;
