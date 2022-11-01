import React from "react";
import styled from "styled-components";

const Home = () => {
    return(
        <HomeContainer>
            <img className="logo" src="logo1.svg" alt='La Disco en patines logo' />
            <img className="personaje" src="icono.svg" alt='La Disco en patines personaje' />
        </HomeContainer>
    )
}

const HomeContainer = styled.section`
width: 100%;
    .logo {
        max-width: 900px;
        margin: 20px auto;
        display: block;
        @media (max-width: 990px) {
            padding: 50px;
        }
        @media (max-width: 650px) {
            margin-top: 100px;
        }
    }
    .personaje {
        width: 300px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        margin-top: -200px;
        @media (max-width: 990px) {
            width: auto;
            height: 50vh;
            margin-top: -100px;
        }
        @media (max-width: 650px) {
            height: 40vh;
        }
    }
`

export default Home