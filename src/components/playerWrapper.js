import React from "react"
import styled from "styled-components"
import prev_edition_image from "../assets/prev-edition-player.png"

const Div = styled.div``

const H2 = styled.h2`
  margin: 10px auto 20px;
  padding: 0;
  font-size: 38px;
  font-weight: 900;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
`

const Img = styled.img`
  display: block;
  margin: 0 auto 30px;
`

const P = styled.p`
  width: 80%;
  margin: 10px auto 20px;
  padding: 0;
  font-family: "Bebas Neue Bold";
  font-size: 56px;
  text-align: center;
  font-weight: 900;
  color: #fff;
  line-height: 1;
  text-transform: uppercase;
`

const BtnWrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Button = styled.button`
  position: relative;
  bottom: 0;
  border: none;
  margin: 0;
  padding: 0;
  width: 375px;
  height: 50px;
  overflow: visible;
  color: #fff;
  font-size: 32px;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
  background: #020a28;
  box-shadow: 0px 7px 40px -1px rgba(20, 20, 20, 0.2);
  transition: 0.2s;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: -15px;
    left: 0;
    width: 0;
    height: 0;
    border-bottom: 15px solid #111;
    border-right: 375px solid transparent;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 0;
    height: 0;
    border-top: 15px solid #111;
    border-left: 375px solid transparent;
  }
`

const LeftBtn = styled(Button)`
  right: 30px;
  &:hover {
    transform: translateX(-5px);
  }
`

const RightBtn = styled(Button)`
  left: 30px;
  &:hover {
    transform: translateX(5px);
  }
`

const PlayerWrapper = props => (
  <Div>
    <H2>III Edycja</H2>
    <Img src={prev_edition_image} alt="Poprzednia edycja" />
    <P>Zobacz poprzednią edycję w sizeerapp:</P>
    <BtnWrapper>
      <LeftBtn>{"<"} Malta 2015</LeftBtn>
      <RightBtn>Malta 2016 {">"}</RightBtn>
    </BtnWrapper>
  </Div>
)

export default PlayerWrapper
