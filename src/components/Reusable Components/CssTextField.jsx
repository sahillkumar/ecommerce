import React from 'react'
import { TextField, withStyles } from '@material-ui/core';

const CssTextField = withStyles({
     root: {
       '& label.Mui-focused': {
         color: '#333',
       },
       '& .MuiOutlinedInput-root': {
         '& fieldset': {
           borderColor:'rgb(206, 197, 197)',
         },
         '&:hover fieldset': {
           borderColor: '#333',
         },
         '&.Mui-focused fieldset': {
           border:'1px solid #333'
         },
       },
     },
   })(TextField);

export default CssTextField