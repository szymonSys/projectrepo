import React from "react"
import styled from "styled-components"

const Div = styled.div`
  position: relative;
  left: ${({ left }) => (left ? "10px" : "-10px")};
`

const PhotosWrapper = ({ children, left, right }) => {
  return (
    <Div left={left} right={right}>
      {children}
    </Div>
  )
}

export default PhotosWrapper
