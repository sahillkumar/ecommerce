import React from 'react';

const style={
    container:{
        width:'100%',
        height:400,
        backgroundColor:'yellow',
        
    },
    item:{
        width:250,
        height:320,
        backgroundColor:'black',
        display:'inline-grid',
        margin: '0px 80px',
        color:'white'
    }
}
const Footer = () => {
    return ( 
        <div style={style.container}>
            <div style={style.item}>Links</div>
            <div style={style.item}>Logo</div>
            <div style={style.item}>Address</div>
            <hr/>
            <h2>All rights REserved </h2>
        </div>
     );
}
 
export default Footer;