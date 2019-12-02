import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 35vh;
  background: #191919;
  color: #fff;
  padding: 40px 0 0 0;
  font-size: 14px;
  font-style: normal;
`
const SmallWrapper = styled.div`
  margin: 0 20px;
  /* flex-basis: 45%; */
`
const LargeWrapper = styled.div`
  /* flex-basis: 45%; */
`
const ListWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`

const ListsWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`

const Header = styled.h4`
  margin: 30px 50px 40px 50px;
  font-size: 20px;
`
const Ul = styled.ul`
  list-style: none;
  margin: 0 50px 20px 50px;
  padding: 0;
`
const Li = styled.li`
  margin-bottom: 20px;
`
const A = styled.a`
  color: #fff;
  text-decoration: none;
  transition: 0.1s;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`
const Cpr = styled.p`
  font-size: 16px;
  color: #ccc;
  text-align: center;
  width: 100vw;
`

const Footer = () => (
  <StyledFooter>
    <SmallWrapper>
      <Header>Firma</Header>
      <ListWrapper>
        <Ul>
          <Li>
            <A href="#">Informacje o Sizeer</A>
          </Li>
          <Li>
            <A href="#">Informacje o firmie</A>
          </Li>
          <Li>
            <A href="#">Nowe salony</A>
          </Li>
          <Li>
            <A href="#">Sklep on-line</A>
          </Li>
          <Li>
            <A href="#">Polityka prywatności</A>
          </Li>
          <Li>
            <A href="#">Regulamin</A>
          </Li>
        </Ul>
      </ListWrapper>
    </SmallWrapper>
    <SmallWrapper>
      <Header>Archiwum</Header>
      <ListWrapper>
        <Ul>
          <Li>
            <A href="#">Respect your shoes #1</A>
          </Li>
          <Li>
            <A href="#">Malta</A>
          </Li>
          <Li>
            <A href="#">Antichallenge</A>
          </Li>
          <Li>
            <A href="#">Respect your shoes #2</A>
          </Li>
        </Ul>
      </ListWrapper>
    </SmallWrapper>
    <LargeWrapper>
      <Header>Znajdź coś dla siebie</Header>
      <ListsWrapper>
        <Ul>
          <Li>
            <A href="#">Buty Nike</A>
          </Li>
          <Li>
            <A href="#">Buty Adidas</A>
          </Li>
          <Li>
            <A href="#">Buty Puma</A>
          </Li>
          <Li>
            <A href="#">Buty Reebok</A>
          </Li>
          <Li>
            <A href="#">Buty Lacoste</A>
          </Li>
        </Ul>
        <Ul>
          <Li>
            <A href="#">Buty DC</A>
          </Li>
          <Li>
            <A href="#">Buty Timberland</A>
          </Li>
          <Li>
            <A href="#">Buty Ecco</A>
          </Li>
          <Li>
            <A href="#">Buty Vans</A>
          </Li>
          <Li>
            <A href="#">Buty Converse</A>
          </Li>
        </Ul>
        <Ul>
          <Li>
            <A href="#">Nike</A>
          </Li>
          <Li>
            <A href="#">Adidas</A>
          </Li>
          <Li>
            <A href="#">Puma</A>
          </Li>
          <Li>
            <A href="#">Reebok</A>
          </Li>
          <Li>
            <A href="#">Lacoste</A>
          </Li>
        </Ul>
        <Ul>
          <Li>
            <A href="#">Bluzy Nike</A>
          </Li>
          <Li>
            <A href="#">Bluzy Adidas</A>
          </Li>
          <Li>
            <A href="#">Bluzy Puma</A>
          </Li>
          <Li>
            <A href="#">Bluzy Reebok</A>
          </Li>
        </Ul>
        <Ul>
          <Li>
            <A href="#">Koszulki</A>
          </Li>
          <Li>
            <A href="#">Koszulki Nike</A>
          </Li>
          <Li>
            <A href="#">Koszulki Adidas</A>
          </Li>
          <Li>
            <A href="#">Koszulki Puma</A>
          </Li>
          <Li>
            <A href="#">Koszulki Reebok</A>
          </Li>
        </Ul>
      </ListsWrapper>
    </LargeWrapper>
    <Cpr> &copy;2017 Marketing Investment Group</Cpr>
  </StyledFooter>
)

export default Footer
