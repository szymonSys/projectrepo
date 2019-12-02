import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Header from "./header"
import MainNav from "./mainNav"
import Footer from "./footer"

const MainWrapper = styled.div`
  overflow: hidden;
`

const Layout = ({ children }) => {
  return (
    <MainWrapper>
      <MainNav />
      <Header />
      <main>{children}</main>
      <Footer />
    </MainWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
