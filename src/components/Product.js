import React from 'react'
import Nav from './Nav'
import styled from 'styled-components'

const Product = () => {
  return (
    <>
    <Nav/>
    <Main>
        <h1 style={{color:"brown"}}>Comming Soon....</h1>
    </Main>

    </>
  )
}

export default Product

const Main = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`