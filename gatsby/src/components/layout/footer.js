import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {

    const [nav, showNav] = useState(false);


    return(
        <FooterContainer>
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
            <div className={nav ? 'unEspacio open' : 'unEspacio'}>
                <img src="unEspacioParaTodes.svg" alt='Texto Un Espacio Para Todes' />
            </div>
            <button onClick={() => showNav(!nav)} className={nav ? 'open' : 'close'}>
                <div className='equis'>
                    <span>X</span>
                </div>
                <ul className='links' >
                    <li>
                        <Link className='queEs' to='/queEs'>
                            ¿QUE ES?
                            <div className='image'>
                                <StaticImage
                                    style={{ height: "100%", width: "100%" }}
                                    src="../../assets/images/queEs.jpg"
                                    alt="A dinosaur"
                                    placeholder="blurred"
                                    layout="FULL_WIDTH"
                                />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/quienesSomos'>
                            QUIENES SOMOS
                            <div className='image'>
                                <StaticImage
                                    style={{ height: "100%", width: "100%" }}
                                    src="../../assets/images/quienesSomos.jpg"
                                    alt="A dinosaur"
                                    placeholder="blurred"
                                    layout="FULL_WIDTH"
                                />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/galeria'>GALERIA
                            <div className='image'>
                                <StaticImage
                                    style={{ height: "100%", width: "100%" }}
                                    src="../../assets/images/galeria.jpg"
                                    alt="A dinosaur"
                                    placeholder="blurred"
                                    layout="FULL_WIDTH"
                                />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/contacto'>CONTÁCTANOS
                            <div className='image'>
                                <StaticImage
                                    style={{ height: "100%", width: "100%" }}
                                    src="../../assets/images/contacto.jpg"
                                    alt="A dinosaur"
                                    placeholder="blurred"
                                    layout="FULL_WIDTH"
                                />
                            </div>
                        </Link>
                    </li>
                </ul>
                <div className="menu">
                    <img className="texto" src="/textoMenu.png" alt='Menú' />
                    <img className="flor" src="/flor.png" alt='Flor La Disco en Patines' />
                </div>
            </button>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
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
    .open .equis {
        opacity: 1;
    }
    .equis {
        position: absolute;
        bottom: 0;
        left: 0;
        opacity: 0;
        transition: opacity 350ms ease-in-out;
        z-index: 1;
        @media (max-width: 1370px) {
            left: auto;
            right: 0;
        }
        span {
            font-weight: 900;
            color: white;
            font-size: 2rem;
            @media (max-width: 860px) {
                font-size: 1rem;
            }
        }
    }
    .unEspacio.open {
        left: 20px !important;
        transform: translateX(0%) !important;
    }
    .unEspacio {
        position: fixed;
        z-index: 2;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        width: 500px;
        transition: all 350ms ease-in-out;
        @media (max-width: 1200px) {
            width: 300px;
        }
        @media (max-width: 860px) {
            bottom: 100px;
        }
    }
    button.open .links{
        left: 530px !important;
        @media (max-width: 1200px) {
            left: 330px !important;
        }
        @media (max-width: 860px) {
            left: 0px !important;
        }
    }
    button.open .menu{
        opacity: 0 !important;

    }
    button {
        position: fixed;
        bottom: 50px;
        right: 50px;
        z-index: 1;
        @media (max-width: 860px) {
            right: 20px;
        }
        .links {
            position: fixed;
            display: flex;
            color: white;
            width: 100%;
            left: 100%;
            bottom: 50px;
            transition: left 450ms ease-in-out;
            @media (max-width: 680px) {
                display: flex;
                text-align: left;
            }
            li, a {
                display: block;
            }
            a {
                margin-left: 30px;
                font-size: 2vw;
                font-family: var(--italic);
                @media (max-width: 860px) {
                    font-size: 1rem;
                }
                &:hover {
                    .image {
                        opacity: .5;
                    }
                }
                .image {
                    transition: opacity 350ms ease-in-out;
                    opacity: 0;
                    position: fixed;
                    width: 100vw;
                    height: 100vh;
                    top: 0;
                    left: 0;
                    z-index: -1;
                    pointer-events: none;
                    @media (max-width: 650px) {
                        display: none;
                    }
                }
            }
        }
        
        .menu {
            transition: all 350ms ease-in-out !important;
            width: 133px;
            height: 133px;
            @media (max-width: 860px) {
                width: 100px;
                height: 100px;
            }
            .texto {
                animation: rotating 10s linear infinite;
            }
        .flor {
            width: 72px;
            position: absolute;
            top: 25px;
            left: 30px;
            transition: all 350ms ease-in-out !important;
            @media (max-width: 860px) {
                width: 50px;
                left: 25px;
                top: 22px;
            }
        }
            &:hover {
            transform: scale(1.1) !important;
            @media (max-width: 860px) {
                transform: none !important;

            }
            .flor {
                transform: scale(.7) !important;
                @media (max-width: 860px) {
                transform: none !important;

            }
            }
        }
        }
        
        
    }

    @keyframes rotating {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`

export default Footer