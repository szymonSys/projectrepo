import React from "react"
import styled from "styled-components"

const Img = styled.img`
  position: absolute;
  display: block;
  width: ${({ size }) => (size ? size : "280")}px;
  z-index: 99;
  ${({ position, positionUnits }) =>
    position
      ? `
    top: ${
      position.top
        ? position.top + `${positionUnits.top ? positionUnits.top : "px"}`
        : "auto"
    };
    bottom: ${
      position.bottom
        ? position.bottom +
          `${positionUnits.bottom ? positionUnits.bottom : "px"}`
        : "auto"
    };
    left: ${
      position.left
        ? position.left + `${positionUnits.left ? positionUnits.left : "px"}`
        : "auto"
    };
    right: ${
      position.right
        ? position.right + `${positionUnits.right ? positionUnits.right : "px"}`
        : "auto"
    };
  `
      : ""}
  transition: 1s;
`
Img.defaultProps = {
  position: {
    top: 0,
    bottom: 0,
    left: 0,
    rigth: 0,
  },
  positionUnits: {
    top: "px",
    bottom: "px",
    left: "px",
    rigth: "px",
  },
  checkIfCanAnimate: null,
}

const Sticker = ({
  image,
  alter,
  position,
  size,
  positionUnits,
  Yoffset,
  Xoffset,
  checkIfCanAnimate,
}) => (
  <Img
    style={
      checkIfCanAnimate && checkIfCanAnimate()
        ? {
            transform: `translate(${Xoffset}px, ${Yoffset}px)`,
          }
        : null
    }
    src={image}
    alt={alter}
    position={position}
    positionUnits={positionUnits}
    size={size}
  />
)

// Sticker.defaultProps = {
//   position: {
//     top: 0,
//     bottom: 0,
//     left: 0,
//     rigth: 0,
//   },
//   positionUnits: {
//     top: "px",
//     bottom: "px",
//     left: "px",
//     rigth: "px",
//   },
//   offset: {
//     x: 0,
//     y: 0,
//   },
// }

export default Sticker
