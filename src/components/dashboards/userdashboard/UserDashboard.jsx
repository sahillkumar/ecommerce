import React from 'react'
import { Parallax } from 'react-parallax';
import './userDashboard.css'
import Typical from 'react-typical'
import { Grid } from '@material-ui/core';
import Story from '../../about/story/Story';
import Partners from '../../about/partners/Partners';
import WhyUs from '../../about/why-us/WhyUs';
import Certifications from '../../about/certifications/Certifications';
import useFirestore from '../../../firebase/useFirestore';


const style={
    inlineStyle:{
        top:'50%',
        left:'50%',
        position:'absolute',
        color:'#fff',
        transform:'translate(-50%,-50%)'
        },
    inPara:{
        height:200,
        width:150,
        border:'1px solid white',
        display:'inline-grid',
        margin:80,
        color:'#eee'
    },
    container:{
        margin:10
    }
}



const UserDashboard = () => {
    return (
        <> 
            <Parallax bgImage="/images/main.jpg" strength={600}>
                <div className="parallax-img">
                    <div style={style.inlineStyle}>
                        <div id='typed-strings' className='organikart'style={{fontSize:'4em',transform:'translateY(-50%)', overflow:'none'}}>
                        
                        <Typical 
                            loop= {1}
                            wrapper='p'
                            steps= {[ 'Organikart']}
                        />
                        </div>
                        <div style={{fontSize:'2em',transform:'translateY(-350%)'}}>The home of Organic Products</div>
                    </div>
                </div>
            </Parallax>
           <Grid container className="our-story">
               <Story/>
           </Grid>
           <Grid container >
               <Partners/>
           </Grid>
           <div className="whyus">
                <WhyUs/>
            </div>  
            <div className="certifications">
                <Certifications/>
            </div>
        </>
     );
}
 
export default UserDashboard;