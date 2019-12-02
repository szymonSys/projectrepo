import React from "react"
import styled from "styled-components"
import rocket_pig_image from "../assets/rocket-pig.png"

const Img = styled.img`
  position: absolute;
  display: block;
  width: 880px;
  z-index: 100;
  bottom: -5%;
  left: 20%;
  transition: 1s;
`

const RocketPig = ({ Yoffset, Xoffset, rotate, checkIfCanAnimate }) => (
  <Img
    style={
      checkIfCanAnimate()
        ? {
            transform: `translate(${Xoffset}px, ${Yoffset}px) rotate(${rotate}deg)`,
          }
        : null
    }
    src={rocket_pig_image}
    alt="Rakietowy Kicks"
  />
)

export default RocketPig
