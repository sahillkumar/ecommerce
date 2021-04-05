import React from 'react';
import "images/tree.svg"


const style={
    container:{
        width:'100%',
        height:190,
        backgroundColor:'#4F5D40',
        borderTop:'1px solid black',
        position:'relative'
    },
    footerBottom:{
        height:30,
        position:'absolute',
        width:'100%',
        bottom:0,
        textAlign:'center',
        color:'#F9FDFE',
        fontSize:'0.8em',
        backgroundColor:'black',
        paddingTop:6
    }
}
const Footer = () => {
    return ( 
        <div style={style.container}>
            <div style={{paddingBottom:5}}>
                <img src="images/tree.svg" width="170" alt="organikart"></img>
            </div>
            <div>
            {/* <Link to="/"><div style={style2}>HOME</div></Link>
            <Link to="/about"><div style={style2}>ABOUT</div></Link>
            <Link to="/shop"><div style={style2}>SHOP</div></Link>
            <Link to="/"><div style={style2}>CONTACT</div></Link>
            <Link to="/"><div style={style2}>FEEDBACK</div></Link> */}
            </div>
            <div style={style.footerBottom}>&copy; Copyright 2020 OganiKart.com
</div>
        </div>
      
     );
}
 
export default Footer;