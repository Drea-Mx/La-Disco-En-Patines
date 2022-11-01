import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {

    const [nav, showNav] = useState(false);


    return(
        <FooterContainer>
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