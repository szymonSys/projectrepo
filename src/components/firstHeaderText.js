import React from "react"
import styled from "styled-components"
import isleOfMaltaLogo from "../assets/isle-of-malta.png"

const H1 = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  font-family: "Bebas Neue Bold";
  top: 70px;
  right: 13%;
  color: #fff;
  font-size: 98px;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  letter-spacing: 10px;
`

const Span = styled.span`
  position: relative;
  top: ${({ topOffset }) => (topOffset ? topOffset : "0")};
`

const SpanWrapper = styled.span`
  position: relative;
  height: 82px;
  margin: 0 0 ${({ marginBottom }) => (marginBottom ? marginBottom : "0")};
  background: #111;
  text-align: center;
  z-index: ${({ zIndex }) => (zIndex ? zIndex : "0")};
  padding: ${({ paddingTop }) => (paddingTop ? paddingTop : "0")} 20px
    ${({ paddingTop }) => (paddingTop ? "68px" : "0")};
  ${({ hasBefore, width, zIndexBefore }) =>
    hasBefore
      ? `
      &::before {
        content: "";
        position: absolute;
        top: -25px;
        left: 0;
        width: 0;
        height: 0;
        border-bottom: 25px solid #111;
        border-right: ${width ? width : "100px"} solid transparent;
        z-index: ${zIndexBefore ? zIndexBefore : "0"};
  }
  `
      : ""};

  ${({ hasAfter, width, zIndexAfter }) =>
    hasAfter
      ? `
      &::after {
        content: "";
        position: absolute;
        bottom: -35px;
        right: 0;
        width: 0;
        height: 0;
        border-top: 35px solid #111;
        border-left: ${width ? width : "100px"} solid transparent;
        z-index: ${zIndexAfter ? zIndexAfter : "0"};
  }
  `
      : ""};
`

const Logo = styled.img`
  position: absolute;
  bottom: -75px;
  left: -10px;
  width: 520px;
  z-index: 1000;
`

const FirstHeaderText = props => {
  return (
    <H1>
      <SpanWrapper hasBefore hasAfter width="610px" zIndexAfter="1">
        <Span topOffset="-12px">Wyślij Kicksa</Span>
      </SpanWrapper>
      <SpanWrapper hasAfter width="553px" zIndexAfter="2">
        <Span topOffset="-12px">na przygodę</Span>
      </SpanWrapper>
      <SpanWrapper
        hasAfter
        width="263px"
        paddingTop="8px"
        marginBottom="60px"
        zIndexAfter="3"
      >
        <Span topOffset="-12px">życia</Span>
      </SpanWrapper>
      <SpanWrapper hasBefore width="394px" zIndex="3" zIndexBefore="3">
        <Span topOffset="-18px">i wygraj</Span>
      </SpanWrapper>
      <SpanWrapper
        hasBefore
        hasAfter
        width="590px"
        zIndexAfter="5"
        zIndexBefore="2"
      >
        <Span topOffset="-16px">7 dni imprezy</Span>
      </SpanWrapper>
      <SpanWrapper hasAfter width="452px" zIndexAfter="6">
        <Span topOffset="-14px">na Malcie</Span>
      </SpanWrapper>
      <Logo src={isleOfMaltaLogo} alt="Isle of Malta logo" />
    </H1>
  )
}

export default FirstHeaderText
