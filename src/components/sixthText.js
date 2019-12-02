import React from "react"
import styled from "styled-components"
import stickers_image from "../assets/stickers.png"

const Div = styled.div`
  max-width: 40%;
  min-width: 500px;
  background-color: rgba(3, 2, 3, 0.5);
  margin: 0 auto 0 15%;
  padding: 25px;
  position: relative;
  top: 60px;
  transition: 0.1s;
  transform: translate(
    ${({ offset }) => (offset ? `${offset.x}px, ${offset.y}px` : "0, 0")}
  );
`

const P = styled.p`
  margin: 0;
  color: #fff;
  font-size: 34px;
  line-height: 1.3;
  text-align: center;
  text-transform: uppercase;
`
const Span = styled.span`
  color: #ff296b;
`

const StyledButton = styled.button`
  border: none;
  display: block;
  margin: 30px auto;
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

const Img = styled.img`
  display: block;
  margin: 30px auto;
  position: relative;
  width: 75%;
`

const SixthText = ({ offset }) => (
  <Div offset={offset}>
    <P>Pobierz stickery i niech się Kicks bawi:</P>
    <StyledButton>Pobierz Stickery</StyledButton>
    <Img src={stickers_image} alt="Stickers" />
    <P>
      Możesz wziąć udział w konkursie tyle razy ile chcesz, nie lubimy
      ograniczeń! Masz czas do <Span>31.05.2017</Span> szczegóły znajdzesz w
      regulaminie
    </P>
  </Div>
)

export default SixthText
