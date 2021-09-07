import React from 'react'
import { TextField, withStyles } from '@material-ui/core';

const CssTextField = withStyles({
     root: {
      "& .MuiInputBase-root": {
        color: '#777',
      },
       '& label.Mui-focused': {
         color: '#333',
       },
       '& .MuiOutlinedInput-root': {
         '& fieldset': {
           borderColor:'rgb(206, 197, 197)',
         },
         '&:hover fieldset': {
        borderColor:'rgb(206, 197, 197)',
         },
         '&.Mui-focused fieldset': {
           border:'1px solid #333'
         },
       },
     },
   })(TextField);

export default CssTextField