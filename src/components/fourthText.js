import React from "react"
import styled from "styled-components"

const Div = styled.div`
  max-width: 33%;
  min-width: 500px;
  margin: 0 auto 0 16%;
  z-index: 3;
  position: relative;
`

const P = styled.p`
  padding: 30px 0 30px;
  margin: 0;
  color: #fff;
  font-size: 46px;
  line-height: 1.3;
  text-align: center;
  text-transform: uppercase;
`

const SmallerP = styled(P)`
  font-size: 34px;
  padding-top: 160px;
`

const FourthText = () => (
  <Div>
    <SmallerP>
      Jury wybierze 20 osób, które przechodzą do II Etapu - a tutaj już z górki.
    </SmallerP>
    <P>
      Wystarczy, że opowiecie w którym video, dlaczego uważacie, że Kicks
      zasługuje na przygodę życia! Podwójne zaproszenia wygrywają 4 osoby i lecą
      z Sizeer na Maltę!
    </P>
  </Div>
)

export default FourthText
