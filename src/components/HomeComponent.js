import React from 'react'
import { Parallax } from 'react-parallax';
const img3='https://www.glimmernet.com/wp-content/uploads/2019/02/clip-path-example-bg.jpg'
const organiBg = 'https://d3tqqxrx8st2s6.cloudfront.net/img/blogs/start-an-organic-food-product-business-in-india.webp'
const aboveFooterImage = 'https://cdn.telanganatoday.com/wp-content/uploads/2018/01/f.jpg'
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
    }
}



const Home = () => {

    return (
        <> 
            <Parallax bgImage={organiBg} strength={600}>
                <div style={{height:'100vh'}}>
                    <div style={style.inlineStyle}>
                        <p style={{fontSize:'4em'}}>OrganiKart</p>
                        <p style={{fontSize:'2em'}}>The home of Organic Products</p>
                    </div>
                </div>
            </Parallax>
            <Parallax strength={500} bgImage={img3}
                renderLayer={
                    comp=>(
                        <div style={{height:'100vh',transform:'translateY(30%)'}} >
                            <div style={{...style.inPara, transform:`scale(${comp*3})`}}>Buy</div>
                            <div style={{...style.inPara, transform:`scale(${comp*3})`}}>Log</div>
                            <div style={{...style.inPara, transform:`scale(${comp*3})`}}>XTRA</div>
                        </div>
                    )
          }>
          </Parallax>
        <Parallax bgImage={aboveFooterImage} >
            <div style={{height:'100vh',backgroundSize:'cover'}}>
                
            </div>
        </Parallax>
        </>
     );
}
 
export default Home;