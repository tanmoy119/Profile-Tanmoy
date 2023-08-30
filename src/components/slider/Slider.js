import React from 'react'
import styled, { css, keyframes } from "styled-components";

const Slider = () => {

    const row1 = [

        "./img/NodeLogo.png", 
        "./img/ReactLogoNew.png",
        "./img/MongoDBLogo.png",
        "./img/Html.png",
        "./img/js.png",
        "./img/Express.png",
        "./img/Redux.png",
        "./img/Npm.png",
        "./img/Git.png",
        
    ]
  return (
    <Container>
        <Wrapper>
            <Marquee>
                <MarqueeGroup>
                    {
                        row1.map((ce)=>(
                            <ImageGroup>
                                <Image src={ce} />
                            </ImageGroup>
                        ))
                    }
                </MarqueeGroup>
                <MarqueeGroup>
                    {
                        row1.map((ce)=>(
                            <ImageGroup>
                                <Image src={ce} />
                            </ImageGroup>
                        ))
                    }
                </MarqueeGroup>
            </Marquee>
            {/* //!Second Slider */}
            <Marquee>
                <MarqueeGroup2>
                    {
                        row1.map((ce)=>(
                            <ImageGroup>
                                <Image src={ce} />
                            </ImageGroup>
                        ))
                    }
                </MarqueeGroup2>
                <MarqueeGroup2>
                    {
                        row1.map((ce)=>(
                            <ImageGroup>
                                <Image src={ce} />
                            </ImageGroup>
                        ))
                    }
                </MarqueeGroup2>
            </Marquee>
        </Wrapper>

    </Container>
  )
}

export default Slider

const  Container = styled.div`
/* background-color: green; */
/* height: 100px; */
display: flex;

`

const Wrapper = styled.div`
    width: 100%;
    /* height: fit-content; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


`


const Marquee = styled.div`
    display: flex;
    width: 1200px;
    overflow: hidden;
    user-select: none;

    /* border: 1px solid #0dd407; */

    mask-image: linear-gradient(to right , hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1)10%,
    hsl(0 0% 0% / 1)90%,
    hsl(0 0% 0% / 0)
    );
`

const scrollX= keyframes`
from{
    left: translateX(0);
}
to{
    transform: translateX(-100%);;
}

`

const common = css`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;
    width: 100%;

    animation: ${scrollX} 20s linear infinite;
`

const MarqueeGroup  = styled.div`
    ${common}
`

const MarqueeGroup2  = styled.div`
    ${common}
    animation-direction: reverse;
`


const ImageGroup = styled.div`
    display: grid;
    place-items: center;
    width: clamp(10rem, 1rem +40vmin,30rem);
    padding: calc(clamp(10rem ,1rem + 30vmin, 30rem)/10);
    /* background-color: yellow; */
`

const Image = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    aspect-ratio: 16/9;
    padding: 5px 20px;
    /* background-color: white; */
    display: flex;
    align-items: center;
`