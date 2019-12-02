import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  position: absolute;
  bottom: 130px;
  left: 20%;
  border: none;
  margin: 0;
  padding: 0;
  width: 400px;
  height: 95px;
  overflow: visible;
  color: #fff;
  font-size: 26px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: ${({ dark }) => (dark ? "#020a28" : "#ff2a69")};
  box-shadow: 0px 7px 40px -1px rgba(20, 20, 20, 0.2);
  transition: 0.2s;
  transform: scale(1);
  cursor: pointer;
  &::after {
    content: ">";
    margin-left: 40px;
    display: inline-block;
    width: 30px;
    height: 95px;
    line-height: 95px;
    transition: 0.2s;
    transform: translateX(0);
  }
  &:hover {
    transform: scale(1.01);
    &::after {
      transform: translateX(10px);
    }
  }
`

const Button = ({ text, dark }) => (
  <StyledButton dark={dark}>{text}</StyledButton>
)

export default Button
