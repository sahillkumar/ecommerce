import { Dialog, DialogTitle,Button, DialogContent, TextField,FormControl } from '@material-ui/core';
import React,{useState} from 'react';

const SignIn = () => {
    const [open, setopen] = useState(false)
    

    return ( 
        <>
        <Button color="inherit" onClick={()=>setopen(!open)}>Login</Button>
        <Dialog open={open} onClose={()=>setopen(!open)}>
            <DialogTitle>Sign up</DialogTitle>
            <DialogContent>
            <FormControl>
            <TextField
            autoFocus
            required
            margin="normal"
            id="name"
            label="Email Address"
            type="Name"
            fullWidth
          />
           <TextField
            margin="normal"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            required
          />
           <TextField
            margin="normal"
            id="name"
            label="Password"
            type="password"
            fullWidth
            required
          />
            <Button    
            type="submit" 
            margin="normal"
            color="primary"
            variant="contained"
            >
                Sign in
            </Button>

            </FormControl>
          
            </DialogContent>
        </Dialog>
        </>
     );
}
export default SignIn;