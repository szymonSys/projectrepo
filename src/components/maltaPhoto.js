import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: block;
  width: 270px;
  height: 170px;
  position: relative;
  margin: 50px 0;
  transition: .8s;
  overflow: hidden;
  border: 6px solid #fff;
  transform-origin: center;
  z-index: ${({ zIndex }) => (zIndex ? zIndex : "0")};
  /* transform: translate(
      ${({ offset }) => (offset.x ? offset.x : "0")}px,
      ${({ offset }) => (offset.y ? offset.y : "0")}px
    )
    rotate(${({ rotate }) => (rotate ? rotate : "0")}deg); */
`

const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`

const MaltaPhoto = ({
  photo,
  alter,
  offset,
  zIndex,
  rotate,
  id,
  Yoffset,
  checkIfCanAnimate,
}) => (
  <Wrapper
    style={
      checkIfCanAnimate()
        ? {
            transform: `translateY(${Yoffset}px) rotate(${rotate}deg)`,
          }
        : null
    }
    id={id}
    offset={offset}
    zIndex={zIndex}
  >
    <Img src={photo} alt={alter} />
  </Wrapper>
)

export default MaltaPhoto
