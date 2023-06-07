import { animated } from '@react-spring/web'
import React from 'react'
import styled from 'styled-components'

const ProfileImg = () => {
  return (
  <Container>

    <img src="./img/profile.jpg" className='profile-img' alt="" />

  </Container>
  )
}

export default ProfileImg


const Container = styled(animated.div)`

img{
        width: 200px;
        border-radius: 20px;
        box-shadow: 10px 20px 20px gray;
        transition: 0.3s ease-in-out;

      }

      img:hover{
         transform: translate(100px 100px);
         box-shadow: 10px 20px 20px;
         

       }

`