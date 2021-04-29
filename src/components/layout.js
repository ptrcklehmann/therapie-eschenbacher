import React from "react"
import "./reset.css"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Seo from "../components/Seo/seo"
import GlobalStyles from "../styles/GlobalStyles"
import TypographyStyles from "../styles/TypographyStyles"
import Logo from "../images/te-logo.svg"
import { ParallaxProvider } from 'react-scroll-parallax';

const Layout = ({ children }) => {
  return (
    <>
      <ParallaxProvider>
        <Seo />
        <GlobalStyles />
        <TypographyStyles />
        <Navbar Logo={Logo} />
        <div className="layout">{children}</div>
        <Footer Logo={Logo} />
      </ParallaxProvider>
    </>
  )
}

export default Layout
