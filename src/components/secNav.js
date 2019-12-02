import React from "react"
import styled from "styled-components"

const StyledNav = styled.nav`
  width: 550px;
  height: 100%;
  font-size: 18px;
  font-family: "Bebas Neue Bold";
  font-style: normal;
`
const Ul = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  list-style: none;
  text-transform: uppercase;
  width: 100%;
  padding: 0;
  /* font-weight: 900; */
`
const Li = styled.li`
  margin: 0 10px;
`
const A = styled.a`
  text-decoration: none;
  color: ${({ isOrange }) => (isOrange ? "orange" : "#333")};
  transition: 0.1s;
  &:hover {
    opacity: 0.9;
  }
`

const SecNav = () => {
  return (
    <StyledNav>
      <Ul>
        <Li>
          <A href="#">Sizeer Club</A>
        </Li>
        <Li>
          <A href="#">Si Magazyn</A>
        </Li>
        <Li>
          <A href="#">Sizeer Music</A>
        </Li>
        <Li>
          <A href="#" isOrange>
            Sklep On-line
          </A>
        </Li>
      </Ul>
    </StyledNav>
  )
}

export default SecNav
