import { firestore } from "../../../../firebase/config";
import {addToOrders} from "../userProfile/userOrders/ordersHelper";
export const displayRazorPay = async (
  user,
  delDetails,
  productsincart,
  setDelDetails,
  setThankyou,
  amount
) => {
  const res = await loadRazorPay(
    "https://checkout.razorpay.com/v1/checkout.js"
  );
  if (!res) {
    alert("Loading razorpay sdk failed");
    return;
  }

  const data = await fetch("http://localhost:8080/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      credentials: "same-origin",
    },
    body: JSON.stringify({
      amount: amount,
    }),
  }).then((data) => data.json());

  var options = {
    key: "rzp_test_mPpRSVNBlZgNlg",
    amount: data.amount,
    currency: data.currency,
    name: "Organikart",

    image: "http://localhost:3000/images/logo.png",
    order_id: data.id,
    handler: function (response) {
      const obj = {
        ...response,
        productsincart,
      };
      firestore
        .collection("USERS")
        .doc(user.userId)
        .collection("order")
        .doc(response.orderId)
        .set(obj)
        .then(() => {
          const cartProds = firestore
            .collection("USERS")
            .doc(user.userId)
            .collection("cart");
          cartProds.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref.delete();
            });
          });
          setDelDetails({
            phone: "",
            paymentType: "",
            house: "",
            city: "",
            state: "",
            landmark: "",
            street: "",
            pincode: "",
            name: "",
            email: "",
          });
          setThankyou(true);
          console.log('thanks set to true');
          productsincart.map(prod => {
            addToOrders(user.userId, prod)}
            
            );
            console.log('All added');

        });
    },
    prefill: {
      name: user.displayName,
      email: user.email,
      contact: delDetails.phone,
    },
    theme: {
      color: "#222",
    },
  };
  var rzp1 = new window.Razorpay(options);
  rzp1.open();
  rzp1.on("payment.failed", function (response) {
    alert("payment failed");
    console.log(response);
  });
};

const loadRazorPay = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

// import React from 'react';
// import Backdrop from '@material-ui/core/Backdrop';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//     color: '#fff',
//   },
// }));

// export default function SimpleBackdrop() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleToggle = () => {
//     setOpen(!open);
//   };

//   return (
//     <div>
//       <Button variant="outlined" color="primary" onClick={handleToggle}>
//         Show backdrop
//       </Button>
//       <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
//         <CircularProgress color="inherit" />
//       </Backdrop>
//     </div>
//   );
// }
