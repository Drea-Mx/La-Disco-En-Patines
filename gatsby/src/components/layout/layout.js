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
        <div className="gradient">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <main>
          {children}
        </main>
      </MainContainer>
      <Footer />
    </>
  )
}

const MainContainer = styled.div`
  .gradient {
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: -1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    overflow: hidden;
    &::after {
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        backdrop-filter: blur(80px);
    }
    div {
        position: absolute;
        border-radius: 50%;
        animation: gradient 4s infinite;
        &:nth-child(1) {
            height: 90%;
            width: 80%;
            background-color: #ECCA10;
            left: -50%;
            top: -60%;
            z-index: -7;
        }
        &:nth-child(2) {
            height: 80%;
            width: 70%;
            bottom: -52%;
            left: -40%;
            animation-delay: 2s;
            background-color: #673B8F;
            z-index: -8;
        }
        &:nth-child(3) {
            height: 105%;
            width: 100%;
            bottom: 15%;
            left: -50%;
            animation-delay: 0.3s;
            background-color: #D26BE1;
            z-index: -9;
        }
        &:nth-child(4) {
            height: 80%;
            width: 35%;
            bottom: 40%;
            left: 28%;
            animation-delay: 1.2s;
            background-color: #5EC6D3;
            z-index: -9;
        }
        &:nth-child(5) {
            height: 100%;
            width: 60%;
            bottom: -52%;
            right: -22%;
            animation-delay: 2s;
            background-color: #284E9B;
            z-index: -9;
        }
        &:nth-child(6) {
            height: 95%;
            width: 30%;
            bottom: 15%;
            right: 25%;
            animation-delay: 0.3s;
            background-color: #F63718;
            z-index: -1;
        }
        &:nth-child(7) {
            height: 50%;
            width: 25%;
            bottom: -10%;
            left: 50%;
            animation-delay: 1.2s;
            background-color: #78C631;
            z-index: -2;
        }
        &:nth-child(8) {
            width: 60%;
            height: 80%;
            top: -15%;
            right: -12%;
            animation-delay: 2s;
            background-color: #AA9443;
            z-index: -9;
        }
        &:nth-child(9) {
            height: 65%;
            width: 50%;
            bottom: -15%;
            right: 40%;
            animation-delay: 0.3s;
            background-color: #2D272B;
            z-index:-10;
        }
        &:nth-child(10) {
            height: 50%;
            width: 25%;
            top: 10%;
            left: 10%;
            animation-delay: 1.2s;
            background-color: #BB717E;
            z-index: -1;
        }
    }
}

@keyframes gradient{
    70%{
        transform: scale(1.2) translate(50px);
    }
}
`


export default Layout
