import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

const QuienesSomos = () => {
    return(
        <QuienesSomosContainer>
            <Link to='/' className="logo">
                <motion.img src="logo2.svg" alt='Logo La Disco En Patines'
                    initial={{ y: "-100%" }}
                    animate={{ y: "0" }}
                    transition={{ delay: 0, duration: 0.5, repeat: 0 }}
                />
            </Link>

            <div className="contenedor">
            <div className="iz">
                    <div className="minuta">
                        <a href="https://minuta.design/">
                            <img className="logoMinuta" src="minuta.svg" alt="Logo de minuta" />
                        </a>
                        <div className="texto">
                            <h2><img src="flechaAbajo.png" alt='flecha Arriba' /> <span>Creatividad</span> <img src="amperson.png" alt='flecha Arriba' /></h2>
                            <h2>Producción</h2>
                        </div>
                    </div>
                </div>
                <motion.div className="de"
                    initial={{ x: "110%" }}
                    animate={{ x: "0" }}
                    transition={{ delay: 0.5, duration: 0.5, repeat: 0 }}
                >
                    <Link className="disco disco1" to='/quienesSomos'>
                        <img src="disco.png" alt='Esfera Disco' />
                        <div className="texto">
                            <span className="capitulo">EQUIPO</span>
                            <i className="monterrey">PRINCIPAL</i>
                        </div>
                    </Link>
                    <Link className="disco disco2" to='/capituloMonterrey'>
                        <img src="disco.png" alt='Esfera Disco' />
                        <div className="texto">
                            <span className="capitulo">Capítulo</span>
                            <i className="monterrey">Monterrey</i>
                        </div>
                    </Link>
                    <Link className="disco disco3" to='/contacto'>
                        <img src="disco.png" alt='Esfera Disco' />
                        <div className="texto">
                            <span className="ve">¿QUIERES SER PARTE DE LA DISCO?</span>
                            <i className="monterrey">CONTÁCTANOS</i>
                        </div>
                    </Link>
                </motion.div>
                
            </div>

        </QuienesSomosContainer>
    )
}

const QuienesSomosContainer = styled.section`
    padding: 0 50px;
    @media (max-width: 850px) {
        padding: 0 20px;
    }
    .contenedor {
        margin-top: 125px;
        margin-left: 50px;
        @media (max-width: 680px) {
            margin: 180px 10px;
        }
        .iz {
            width: 70%;
            height: 100%;
            margin-bottom: 150px;
            .minuta {
                margin-bottom: 30vh;
                .logoMinuta {
                    margin-bottom: 100px;
                    @media (max-width: 850px) {
                        margin-bottom: 50px;
                    }
                }
                h2 {
                    font-family: var(--italic);
                    display: flex;
                    align-items: center;
                    font-size: 64px;
                    margin-left: 20px;
                    justify-content: center;
                    @media (max-width: 850px) {
                        font-size: 5vw;
                        justify-content: flex-start;
                    }
                    &:nth-child(2) {
                        transform: translateX(200px);
                        @media (max-width: 850px) {
                            transform: translateX(80px);
                        }
                    }
                    img {
                        width: 63px;
                        @media (max-width: 850px) {
                            width: 30px;
                        }
                        &:nth-child(1) {
                            transform: rotate(180deg);
                        }
                    }
                    span {
                        margin-left: 20px;
                        margin-right: 20px;
                        @media (max-width: 850px) {
                            margin: 0 10px;
                        }
                    }
                }
            }
            .titulo {
                font-size: 64px;
                font-family: var(--italic);
                /* display: flex; */
                display: none;
                justify-content: center;
                align-items: center;
                text-align: center;
                margin-bottom: 30px;
                @media (max-width: 1020px) {
                    font-size: 52px;
                    margin-top: 50px;
                }
                @media (max-width: 850px) {
                    font-size: 32px;
                }
                img {
                    width: 65px;
                    margin-left: 20px;
                    @media (max-width: 850px) {
                        width: 30px !important;
                    }
                }
            }
            .equipo {
                /* display: grid; */
                display: none;
                grid-template-columns: 1fr 1fr;
                grid-gap: 50px;
                margin-bottom: 30vh;
                @media (max-width: 650px) {
                    grid-template-columns: 1fr;
                }
                .miembro {
                    width: 100%;
                    text-align: center;
                    @media (max-width: 650px) {
                        text-align: left;
                    }
                    h3 {
                        font-family: var(--italic);
                        font-size: 44px;
                        display: flex;
                        justify-content: flex-start;
                        text-align: left;
                        align-items: center;
                        font-weight: 100;
                        margin-bottom: 20px;
                        @media (max-width: 1190px) {
                               font-size: 4vw;
                            }
                        img {
                            width: 50px;
                            margin-left: 10px;
                            @media (max-width: 850px) {
                                width: 30px;
                            }
                        }
                    }
                    h2 {
                        font-size: 58px;
                        margin-top: 20px;
                        text-transform: uppercase;
                        @media (max-width: 1190px) {
                            font-size: 4.5vw;
                        }
                        @media (max-width: 650px) {
                            font-size: 4vw;
                        }
                    }
                }
            }
        }
        .de {
            position: fixed;
            right: 0;
            top: 120px;
            width: 30%;
            height: 100vh;
            .disco1 {
                top: 0px;
                right: 50px;
                @media (max-width: 950px) {
                    right: 20px;
                }
            }
            .disco2 {
                top: 210px;
                right: 200px;
                @media (max-width: 950px) {
                    right: 80px;
                    top: 120px;
                }
                @media (max-width: 680px) {
                    right: 20px;
                }
            }
            .disco3 {
                top: 430px;
                right: 50px;
                @media (max-width: 950px) {
                    right: 20px;
                    top: 240px;
                }
            }
            .disco {
                position: absolute;
                width: 200px;
                @media (max-width: 950px) {
                    width: 100px;
                }
                .texto {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    .ve {
                        background-color: black;
                        font-size: 18px;
                        display: inline-block;
                        width: 180px;
                        margin-bottom: 5px;
                        margin-left: auto;
                        margin-right: auto;
                        @media (max-width: 950px) {
                            font-size: 12px;
                            width: 120px;
                        }
                    }
                    .capitulo {
                        font-size: 28px;
                        background-color: black;
                        display: inline-block;
                        margin-bottom: 5px;
                        padding-left: 5px;
                        padding-right: 5px;
                        margin-left: auto;
                        margin-right: auto;
                        @media (max-width: 950px) {
                            font-size: 18px;
                        }
                    }
                    .monterrey {
                        padding-left: 5px;
                        padding-right: 5px;
                        font-size: 28px;
                        background-color: black;
                        font-family: var(--italic);
                        display: inline-block;
                        margin-left: auto;
                        margin-right: auto;
                        @media (max-width: 950px) {
                            font-size: 20px;
                        }
                    }
                }
            }
        }
    }

    
    .logo {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        top: -20px;
        display: block;
        padding: 0 50px;
        max-width: 800px;
        margin: 40px auto;   
        @media (max-width: 1020px) {
            margin-top: 90px;
        }  
        @media (max-width: 680px) {
            top: 0;
            padding: 0 20px;
            max-width: none;
            width: 60%;
        }
    }
`

export default QuienesSomos
