import React from "react"
import styled from "styled-components"

const StyledMainNav = styled.div`
  font-size: 12px;
  background: #000;
  color: #fff;
  font-family: "Arial";
  font-style: normal;
`

const Ul = styled.ul`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 0 20px;
  list-style: none;
  text-transform: uppercase;
`

const Li = styled.li`
  height: 100%;
  line-height: 40px;
  font-weight: ${({ isBold }) => (isBold ? "900" : "400")};
  color: ${({ phoneNumber }) => (phoneNumber ? "orange" : "#fff")};
  &::after {
    content: ${props => (props.isLast ? '""' : '"/"')};
    margin: 0 40px;
  }
`

const A = styled.a`
  text-decoration: none;
  color: #fff;
  transition: 0.1s;
  &:hover {
    opacity: 0.9;
  }
`

const MainNav = () => {
  return (
    <StyledMainNav>
      <Ul>
        <Li>
          <A href="#">Lorem ipsum dolor</A>
        </Li>
        <Li>
          <A href="#">Lorem ipsum dolor</A>
        </Li>
        <Li>
          <A href="#">Lorem ipsum dolor</A>
        </Li>
        <Li>
          <A href="#">Lorem ipsum dolor</A>
        </Li>
        <Li>
          <A href="#">Sizeerclub</A>
        </Li>
        <Li isBold>
          <A href="#">Newsletter</A>
        </Li>
        <Li phoneNumber isLast>
          +48 12 681 84 84
        </Li>
      </Ul>
    </StyledMainNav>
  )
}

export default MainNav
