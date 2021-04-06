export const displayRazorPay = async () =>{
     const res = await loadRazorPay("https://checkout.razorpay.com/v1/checkout.js")
     if(!res){
          alert('Loading razorpay sdk failed')
          return
     }

     var options = {
          "key": "rzp_test_VWrfBoZUaiDY2m", // Enter the Key ID generated from the Dashboard
          "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          "currency": "INR",
          "name": "Organikart",
          "description": "Test Transaction",
          "image": "https://example.com/your_logo",
          // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          "handler": function (response){
              alert(response.razorpay_payment_id);
              alert(response.razorpay_order_id);
              alert(response.razorpay_signature)
          },
          "prefill": {
              "name": "Gaurav Kumar",
              "email": "gaurav.kumar@example.com",
              "contact": "9999999999"
          },
          "notes": {
              "address": "Razorpay Corporate Office"
          },
          "theme": {
              "color": "#222"
          }
      };
     var rzp1 = new window.Razorpay(options);
     rzp1.open();
     rzp1.on('payment.failed', function (response){
     alert(response.error.code);
     alert(response.error.description);
     alert(response.error.source);
     alert(response.error.step);
     alert(response.error.reason);
     alert(response.error.metadata.order_id);
     alert(response.error.metadata.payment_id);
     });
     
}

const loadRazorPay = (src) =>{
     return new Promise(resolve =>{
          const script = document.createElement('script')
          script.src = src
          
          script.onload = () =>{
               resolve(true)
          }
          script.onerror = () =>{
               resolve(false)
          }
          document.body.appendChild(script)
     })
}

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