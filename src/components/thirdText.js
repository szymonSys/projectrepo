import React from "react"
import styled from "styled-components"
import left_sticker from "../assets/stickers/like-sticker.png"
import right_sticker from "../assets/stickers/plane-sticker.png"

const Div = styled.div`
  max-width: 35%;
  min-width: 500px;
  margin: 0 13% 0 auto;
  z-index: 120;
  position: relative;
`

const P = styled.p`
  padding: 70px 0 30px;
  margin: 0;
  color: #fff;
  font-size: 46px;
  line-height: 1.3;
  text-align: center;
  text-transform: uppercase;
`

const SmallerP = styled(P)`
  font-size: 34px;
  padding-top: 50px;
`

const Span = styled.span`
  color: #ff296b;
`

const BtnWrapper = styled.div`
  width: 100%;
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 100%;
    z-index: 99;
  }

  &::before {
    right: 85%;
    background: url(${left_sticker}) no-repeat center;
    background-size: contain;
  }

  &::after {
    left: 85%;
    background: url(${right_sticker}) no-repeat center;
    background-size: contain;
  }
`

const StyledButton = styled.button`
  border: none;
  display: block;
  margin: 0 auto;
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

const ThirdText = () => (
  <Div>
    <P>
      Zmontuj, przerób, sklej lub nagraj i przenieś Kicka w przygodę życia.
      Wrzuć na Instagram, dodaj hashtag
      <Span> #SIZEERXKICKS</Span> i oznacz osobę, z którą chcesz lecieć na
      Maltę.
    </P>
    <BtnWrapper>
      <StyledButton>Pobierz stickery</StyledButton>
    </BtnWrapper>
    <SmallerP>
      Masz pomysł od czapy? Super! Wygrywaj najbardziej odjechane i kreatywne
      pomysły.
    </SmallerP>
  </Div>
)

export default ThirdText
