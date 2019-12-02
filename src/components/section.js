import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  display: ${({ isFlex }) => (isFlex ? "flex" : "block")};
  ${({ isFlex }) =>
    isFlex
      ? `
    align-items: center;
    justify-content: center;
  `
      : ""};
  height: 740px;
  position: relative;
  background: url(${({ backgroundImg }) => `${backgroundImg}`}) no-repeat center;
`

const Section = ({ backgroundImg, isFlex, id, className, children }) => {
  return (
    <StyledSection
      backgroundImg={backgroundImg}
      isFlex={isFlex}
      id={id}
      className={className}
    >
      {children}
    </StyledSection>
  )
}

export default Section
