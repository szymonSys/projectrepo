import React from "react"
import styled from "styled-components"

const Div = styled.div`
  max-width: 33%;
  min-width: 500px;
  margin: 0 14% 0 auto;
  z-index: 3;
  position: relative;
  padding-top: 60px;
  color: #fff;
  font-size: 42px;
  line-height: 1.1;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 5px;
`

const P = styled.p`
  padding: 2px 0;
  margin: 0;
`

const BoldSpan = styled.span`
  display: ${({ isBlock }) => (isBlock ? "block" : "inline")};
  font-weight: 900;
  padding: 2px 0;
  color: ${({ isPink }) => (isPink ? "#ff296b" : "#fff")};
`

const FifthText = () => (
  <Div>
    <P>7 dni w hotelu Hilton</P>
    <BoldSpan isBlock>#LIVEISBEAUTIFUL</BoldSpan>
    <P>
      Bilety na <BoldSpan>IOMTV #PARTYHARD</BoldSpan>
    </P>
    <P>Rozrywka na Malcie</P>
    <BoldSpan isBlock>#NABOGATO</BoldSpan>
    <P>Sneakery od Sizeer</P>
    <BoldSpan isBlock isPink>
      #RESPECTYOURSHOES
    </BoldSpan>
    <P>Niezbędne gadżety</P>
    <BoldSpan isBlock isPink>
      #SIZEERPACK
    </BoldSpan>
    <P>Kieszonkowe</P>
    <BoldSpan isBlock isPink>
      #ZAHAJSSIZEERBALUJ
    </BoldSpan>
  </Div>
)

export default FifthText
