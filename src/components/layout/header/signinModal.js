import { Dialog, DialogTitle,Button, DialogContent, TextField } from '@material-ui/core';
import React from 'react';

class SignIn extends React.Component {
  state = { 
    open:false,
    form:{
      name:'',
      email:'',
      password:''
    }
   }

  handleModal=()=>{
    this.setState({
      open:!this.state.open,
      form:{
        name:'',
        email:'',
        password:''
      }
    })
  }

  handleChange=name=>({target:{value}})=>{
  
    this.setState(({form})=>({
      form:{
        ...form,
        [name]:value
      }
    }))
  }

  render() { 
    const {style}=this.props,
          {name,email,password}=this.state.form
    return ( 
      <>
      <div style={style} onClick={this.handleModal}>LOGIN</div>
      <Dialog open={this.state.open} onClose={this.handleModal} >
        <DialogTitle>Sign up</DialogTitle>
          <DialogContent>
            <TextField
            autoFocus
            required
            margin="normal"
            id="name"
            value={name}
            label="Name"
            type="Name"
            fullWidth
            onChange={this.handleChange('name')}
          />
            <TextField
            margin="normal"
            id="email"
            label="Email Address"
            type="email"
            name={email}
            fullWidth
            required
            onChange={this.handleChange('email')}
          />
            <TextField
            margin="normal"
            id="password"
            label="Password"
            type="password"
            value={password}
            fullWidth
            required
            onChange={this.handleChange('password')}
          /><br/>
            <Button    
            type="submit" 
            margin="normal"
            color="primary"
            variant="contained"
            disabled={!name || !email || !password}
            onClick={this.handleModal}
          >Sign in</Button>
        </DialogContent>
      </Dialog>
      </>
     );
  }
}
 
export default SignIn;
