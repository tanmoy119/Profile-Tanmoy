import React from 'react'
import { useSpring, animated } from '@react-spring/web'

const About = () => {
    const props = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
      })
    
      return <animated.div onMouseEnter={()=>console.log("first")} style={props}>Hello World</animated.div>
}

export default About


