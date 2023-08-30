import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import {animated} from '@react-spring/web'
import styled from 'styled-components'
import Nav from './Nav';
import ProfileImg from './ProfileImg';
import Slider from './slider/Slider';

const ProfilePP = () => {
  return (
    <Container>
    <Parallax pages={3} style={{ top: '0', left: '0' }} innerStyle={{height:"100vh"}}>

      <ParallaxLayer offset={0} speed={0.15}
      factor={.5}
      innerStyle={{height:"50vh"}}
      >
        <div className="img"></div>
      </ParallaxLayer>
      
      <ParallaxLayer 
      offset={0}
      speed={0}
      sticky={{}}
      >
       <div className="nav"><Nav/></div> 
      </ParallaxLayer>


      <ParallaxLayer offset={0} speed={.25}>
        <div className="headings">

            <h2><span style={{color:'#0dd407'}}>HELLO</span> I'M</h2>
            <h1>TANMOY BARMAN</h1>

            <span>Professional Web Devloper</span>

        <Slider/>
        </div>
      </ParallaxLayer>
    {/* --------------------------------2nd page------------------------------------ */}
      <ParallaxLayer  factor={0} offset={1} speed={0.25}>
        <div className="about">
            <h1>ABOUT</h1>
            <ProfileImg />
            {/* <div className="about-content">
              <img src="./img/profile.jpg" className='profile-img' alt="" />
            </div> */}
            

        </div>

        <div className="slider">
        
        </div>
            
      </ParallaxLayer>

    </Parallax>
    {/* <Slider/> */}

    </Container>
  )
}

export default ProfilePP



const Container = styled(animated.div)`
.img{
height: 100vh;
background: rgba(0,0,0,0.4) url(https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701772540-optimized.jpg);
background-blend-mode: darken;
background-size: cover;
box-shadow: 10px  5px 20px 0px #040514;
border-radius: 45% 0 40% 10%;
background-position: 69%;


}

.img::after{
  content: "";
  position: absolute;
  bottom: -115%;
  left: 10px;
  width: 90%;
  height: 30px;
  background: rgba(4,5,20,0.6);
  border-radius: 50%;
  z-index: -1;
  filter: blur(8px);
}

/* .img::before{
  content: "";
  position: absolute;
  bottom: -10%;
  //left: 5%;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: -1;
  filter: blur(10px);
  border-radius: 45% 0 0 0;
} */

.headings{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.headings>h2{

    color: white;

}

.headings>h1{
    color: #ffff;
    position: relative;
}
.headings>h1::before{
    content: "";
    width: 100%;
    background-color: #d3284c;
    height: 2px;
    display: block;
}

.headings>h1::after{
    content: "";
    width: 100%;
    background-color: #d3284c;
    height: 2px;
    display: block;
}

.headings>span{
    color: #ffffff;
    font-size: 18px;
    font-weight: 40px;
}


.about{
    //height: 80vh;
    padding: 0 0 60px 0;
    background-color: #040717;
    border-radius: -50px 0 0 0 ;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #be2042;
    transform: translate(10px 10px);
    box-shadow: 0px  20px 50px #040514;

    h1:hover{
      color: green;
    }
    .about-content{
      
      img{
        width: 200px;
        border-radius: 20px;
        /* box-shadow: 10px 20px 20px gray; */
        transition: 0.3s ease-in-out;

      }

      .profile-img:hover{
        transform: translate(10px 10px);
        /* box-shadow: 10px 20px 20px; */
      }
      
    }
}


.nav{

}

.slider{
  /* height: 200px; */
  /* background-color: yellow; */
}



`