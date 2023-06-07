import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


 import CottageIcon from '@mui/icons-material/Cottage';
 import CategoryIcon from '@mui/icons-material/Category';
 import InfoIcon from '@mui/icons-material/Info';
 import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';

 //burger
 import MenuIcon from '@mui/icons-material/Menu';
 import ClearIcon from '@mui/icons-material/Clear';




const Nav = () => {

    const [cburger, setcburger] = useState(false)
  return (
    <Container>
        <img onMouseEnter={()=>console.log("hi")} className='logo' src={`./img/${(cburger)?'logow':'logow'}.png`} alt="hellow" />

        {
            (cburger===true)?<MenuIcon className='burger'  onClick={()=>setcburger(false)}/>:<ClearIcon className='burger' onClick={()=>setcburger(true)}/>
        }
        
        <nav className='nav' style={{left:(cburger)?'-110%':'0%',top:(cburger)?'-110%':'0%'}}>
           

            <div className="section">
                <CottageIcon className='nav-icons'/>
                <Links className='link' to={"/"}>HOME</Links>
            </div>
            <div className="section">
                <CategoryIcon className='nav-icons'/>
                <Links className='link' to={"/Product"}>PRODUCT</Links>
            </div>
            <div className="section">
                <InfoIcon className='nav-icons'/>
                <Links className='link' to={"/About"}>ABOUT</Links>
            </div>
            <div className="section">
                <ContactEmergencyIcon className='nav-icons'/>
                <Links className='link' to={"/Contact"}>CONTACT</Links>
            </div>
            
        </nav>
    </Container>
  )
}

export default Nav



const Container = styled.div`
   background-color: transparent;
   display: flex;
   border: none;
       justify-content: space-between;
       align-items: center;
       height: 70px;
    .nav{
       width: 30%;
       min-height: 64px;
       margin-right: 50px;
       display: flex;
       justify-content: space-around;
       align-items: center;

       .section{
        display: flex;
        align-items: center;
       }
    }
    .nav-icons{
       color: #8c8c8c;
       height: 18px;
    }

    .logo{
        width: 200px;
        height: 20px;
        margin-left: 100px;
    }
   
    /* .link:after {
    content: "";
    position: absolute;
    background-color: white;
    height: 1.5px;
    width: 100%;
    left: 0;
    bottom: -4px;
} */

.burger{
    color: #8c8c8c;
    cursor: pointer;
    display: none;
}


@media screen and (max-width:850px) {

    
    .logo{
        z-index: 99;
        
    }
    .nav{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background: rgba(255 , 255, 255, 0.25);
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37);
        backdrop-filter: blur(4px);
        border-radius: 13px;
        width: 100%;
        height: auto;
        position: absolute;
        top: 0px;
        //align-items: stretch;
        padding: 88px 0 30px 0;
        z-index: -1;
        transition: all 0.3s ease-in-out;
        

        .section{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 2rem 0;
            
            
            
            .nav-icons,.link{
                color: #181818;
            }

            .link:hover{
                color: #d3d3d3f5;
               // background: rgba(255 , 255, 255, 0.25);
            }

        }

        .section:hover{
            background: rgba(255 , 255, 255, 0.25);

        }
    }

    .burger{
    color: white;
    cursor: pointer;
    display: block;
    z-index: 99;
    margin: 0 30px;
}
    
}




   
`

const Links = styled(Link)`
color: #b2b2b2;
text-decoration: none;
font-size: 16px;
position: relative;
margin: 0 15px 0 5px;
transition: 0.3s;



:after {
    content: "";
    position: absolute;
    background-color: #d3d3d3f5;
    height: 1.5px;
    width: 0;
    left: 0;
    bottom: -4px;
}

:hover::after{
    width: 100%;
    transition: 0.3s;
}

:hover{

    color: #0dd407;
}


`


