import React from "react"
import styled from "styled-components"

const P = styled.p`
  max-width: 33%;
  min-width: 500px;
  margin: 0 auto 0 18%;
  padding: 100px 0;
  color: #fff;
  font-size: 46px;
  line-height: 1.3;
  text-align: center;
  text-transform: uppercase;
`

const Span = styled.span`
  color: #ff296b;
`

const SecondText = () => (
  <P>
    Wyślij Kicksa na przygodę życia! Wyślij go w miejsca, o których nawet nie
    śnił! Pozwól mu budować jego własną historię. Kick kocha czasoprzestrzeń
    więc nie ograniczaj się i dostarcz mu wrażeń na swoją miarę
    <Span> #NIEMANUDY</Span>
  </P>
)

export default SecondText
