import React from 'react'
import { Parallax } from 'react-parallax';
import './userDashboard.css'

import Typical from 'react-typical'
import Categories from '../../SellByCategories/Categories';
import { Grid } from '@material-ui/core';
import Story from '../../about/story/Story';
import Partners from '../../about/partners/Partners';
import WhyUs from '../../about/why-us/WhyUs';
import Certifications from '../../about/certifications/Certifications';


const img3='https://www.nationalgeographic.com/content/dam/environment/photos/future_of_food/organic_farming_rough/01_organic_farming_i8860_20181003_11260.adapt.1900.1.jpg'
const organiBg = 'https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?cs=srgb&dl=pexels-pixabay-158179.jpg&fm=jpg'
const aboveFooterImage = 'https://cdn.telanganatoday.com/wp-content/uploads/2018/01/f.jpg'
const img2="images/main.jpg"

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
            <Parallax bgImage={organiBg} strength={600}>
                <div className="parallax-img">
                    <div style={style.inlineStyle}>
                        <p id='typed-strings' className='organikart'style={{fontSize:'4em',transform:'translateY(-50%)', overflow:'none'}}>
                        
                        <Typical 
                            loop= {1}
                            wrapper='p'
                            steps= {[ 'Organikart']}
                        />
                        </p>
                        <p style={{fontSize:'2em',transform:'translateY(-350%)'}}>The home of Organic Products</p>
                    </div>
                </div>
            </Parallax>
            <div className="categories">
                <Categories/>
           </div>
           <Grid container className="our-story">
               <Story/>
           </Grid>
           <Grid container className='partners' >
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




{/* // <Parallax strength={500} bgImage={img3}
// renderLayer={
//     comp=>(
//         <div style={{height:'100vh',transform:'translateY(30%)'}} >
//             <div style={{...style.inPara, transform:`scale(${comp*3})`}}>Buy</div>
//             <div style={{...style.inPara, transform:`scale(${comp*3})`}}>Log</div>
//             <div style={{...style.inPara, transform:`scale(${comp*3})`}}>XTRA</div>
//         </div>
//     )
// }>
// </Parallax>
// <Parallax bgImage={aboveFooterImage} >
// <div style={{height:'100vh',backgroundSize:'cover'}}>

// </div>
// </Parallax> */}