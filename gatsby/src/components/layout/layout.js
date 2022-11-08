import React from "react"
import { Normalizer } from "../styles/Normalizer"
import { Typography } from "../styles/Typography"
import Header from "./header"
import Footer from "./footer"
import styled from "styled-components"

export const Layout = ({children}) => {

  return (
    <>
      <Normalizer />
      <Typography />
      <Header />
      <MainContainer>
          {children}
      </MainContainer>
      <Footer />
    </>
  )
}

const MainContainer = styled.main`

`


export default Layout
