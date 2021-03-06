import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import Navbar from './globals/navbar/Navbar'
import Footer from './globals/Footer'
//import './layout.css'

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  )
}
// comment

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body{
  font-family: 'Open Sans', sans-serif;
  color:black;
  background: var(--mainOrange);
}
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
