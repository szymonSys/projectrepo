import React from "react"
import styled from "styled-components"
import SecNav from "../components/secNav"
import logo from "../assets/sizeer-logo.png"

const StyledHeader = styled.header`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Ul = styled.ul`
  font-size: 18px;
  font-style: normal;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin: 0 10px 0 20%;
`

const Li = styled.li`
  margin: 0 10px;
  font-weight: 900;
  color: ${({ isActive }) => (isActive ? "#111" : "#999")};
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    opacity: 0.9;
  }
`

const Img = styled.img`
  margin: 0 150px 0 0;
`

const Header = () => (
  <StyledHeader>
    <Img src={logo} alt="logo" />
    <SecNav />
    <Ul>
      <Li isActive>PL</Li>
      <Li>DE</Li>
      <Li>SK</Li>
      <Li>CZ</Li>
      <Li>EN</Li>
    </Ul>
  </StyledHeader>
)

export default Header
