//import { animated } from '@react-spring/web'
import React from 'react'
import styled from 'styled-components'

//icons 
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';



const ProfileImg = () => {
  return (
  <Container>
    <div className="innerDiv">
    <img src="./img/profile.jpg" className='profile-img' alt="" />

    <div className="details">
      <h2 className='D-heading'>PERSONAL DETAILS</h2>
      <p>I am Tanmoy Barman. I am from falakata. I completed my 10+2 from local public high school and then I completed my graduation from Techno India University in CSE, which is located in Kolkata.
      I am a profesional web developer. Besically I build my proects on MERN Stack, but i alwasy ready to learn and ready to work in new technologys.
      </p>

      <div className="about-cart">
        <div className="left-sub-cart">
          <div className="section">
            <CalendarMonthIcon className='icon'/>
            <h4>BIRTHDAY</h4>
          </div>

        
          <div className="section">
            <LocalPhoneIcon className='icon'/>
            <h4>PHONE</h4>
          </div>

        
          <div className="section">
            <MailRoundedIcon className='icon'/>
            <h4>EMAIL</h4>
          </div>

     
          <div className="section sectionS">
            <LanguageRoundedIcon className='icon'/>
            <h4>WEBSITE</h4>
          </div>

          
        </div>


        <div className="right-sub-cart">
          <div className="section">
            <h4>: 21/12/1999</h4>
          </div>

        
          <div className="section">
            <h4>: 9330629437</h4>
          </div>

        
          <div className="section">
            <h4 >: <span className='email'>tanmoy.tui.js@gmail .com</span></h4>
          </div>

     
          <div className="section">
            <h4>: https://profile-tanmoy.netlify.app/</h4>
          </div>

          
        </div>
      </div>

    </div>

    </div>

  </Container>
  )
}

export default ProfileImg


const Container = styled.div`
width: 100%;


img{
        height: auto;
        width: 350px;
        border-radius: 20px;
        /* box-shadow: 0px 0px 20px gray; */
        transition: 0.6s ease-in-out;
        margin:0 60px;

      }

      /* img:hover{
         transform: translate(0px,-10px);
         box-shadow: 0px 0px 20px;
         

       } */

       img::before{
        content: "";
        position: absolute;
        bottom: -100%;
        left: 5%;
        width: 90%;
        height: 20px;
        background: rgba(250,0,0,0.3);
        border-radius: 50%;
        z-index: 1;
        filter: blur(10px);
        //display: block;
        
       }

       .innerDiv{
        //background-color: yellow;
        display: flex;
        width: 70%;
        margin: 0 auto;
       }
.details{
    //background-color: green;
    
    .D-heading{
      //color: white;
      display: flex;
      align-items: center;
    }
    .D-heading::before{
      content: "";
      
    width: 5px;
    background-color: #d3284c;
    height: 50px;
    display: block;
    margin: 0 10px 0 0 ;
        


    }
    
}

.about-cart{
  color: #98a300;
  display: flex;
  .left-sub-cart{
    margin-right: 3px;
    .section{
      display: flex;
      align-items: center;
      font-size: 18px;
     // color: #29d2cc;
      h4{
        margin-left: 8px ;
      }
      .icon{
        color: #9fa725;
      }
    }
  }

  .right-sub-cart{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .section{
      font-size: 18px;
    }
  }
}

@media screen and (max-width:850px){

  height: auto;
  .innerDiv{
    flex-direction: column;
    align-items: center;
  }
  .profile-img{
    width: 250px;
  }

  .about-cart{
    //background-color: #d3284c;
    width: 280px;
    .section{
      //font-size: 15px;
    }
    .sectionS{
      margin-top: 23px;
    }
    .email{
     letter-spacing: -1px;
    }
  }

}

`