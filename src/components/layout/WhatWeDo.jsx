import React from 'react';




function ShowWhatWeDO(){
    return(
    <div>
        <h2 style ={{fontFamily:'SweetPurple', fontSize:'50px', fontWeight:"100"}}>
   
            From the mountains to your doorstep

        </h2>
        
        <div  style={pictureStyle}>
            <div className='fade-in' style={picCards}>
                <img style ={img} className = 'zoom' src= 'https://images.pexels.com/photos/1117272/pexels-photo-1117272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
            </div>
           
            <div className='fade-in' style={picCards}>
                <img style ={img} className = 'zoom'  src= 'https://images.pexels.com/photos/3669640/pexels-photo-3669640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
            </div>
           
            <div className='fade-in'  style={picCards}>
                <img style ={img} className = 'zoom'  src= 'https://images.pexels.com/photos/531446/pexels-photo-531446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
            </div>


        </div>
   </div>

    );
}

const pictureStyle = {
    background: 'url(https://images.pexels.com/photos/37728/pexels-photo-37728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") no-repeat center center/cover',
    position:'absolute',
    display : 'flex',
    height:'400px',
    //backgroundColor:'red',
    maxWidth:'auto',
    marginLeft:'1px',
    overflow:'wrap'    
}

const picCards = {
    //backgroundColor:"blue",
    position:'relative',
    top:'10%',
    height:'300px',
    maxWidth:'100%',
    padding:'10px 10px',
}

const img = { 
    maxWidth: '95%', 
    maxHeight: '100%',
    
}


export default ShowWhatWeDO; 