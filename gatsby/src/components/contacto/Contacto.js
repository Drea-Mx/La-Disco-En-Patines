import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion"

const Contacto = () => {
    return(
        <ContactoContainer>
            <Link to='/' className="logo">
                <motion.img src="logo2.svg" alt='Logo La Disco En Patines'
                    initial={{ y: "-100%" }}
                    animate={{ y: "0" }}
                    transition={{ delay: 0, duration: 0.5, repeat: 0 }}
                />
            </Link>

            <div className="contenedor">
            <div className="iz">
                <h1 className="titulo">Quieres ser parte de la historía de la Disco En Patines</h1>
                <h2>CONTÁCTANOS HOY!</h2>
                <h2>NUESTRO MAIL - <a href="mailto:hola@minuta.mx">hola@minuta.mx</a></h2>
                <i>Ó deja un mensaje aquí abajo</i>
                <form 
                    name="Form Contact" 
                    action="/thank-you"
                    method="POST" 
                    data-netlify="true"
                >
                    <input type="hidden" name="form-name" value="Form Contact" />
                    <input type='text' name='name' placeholder='Nombre*' />
                    <input type='email' name='email' placeholder='Email*' />
                    <input type='text' name='email' placeholder='Teléfono' />
                    <textarea name='message' placeholder='Escribe tu mensaje...' ></textarea>
                    
                    <div data-netlify-recaptcha="true"></div>
                    <button type='submit'>ENVIAR AHORA</button>
                </form>
            </div>
                <div className="de"
                    initial={{ x: "110%" }}
                    animate={{ x: "0" }}
                    transition={{ delay: 0.5, duration: 0.5, repeat: 0 }}
                >
                    <motion.img className="personaje" src="icono.svg" alt='La Disco en patines personaje'
                        initial={{ x: "-100vw" }}
                        animate={{ x: "calc(0vw)" }}
                        transition={{ delay: 0, duration: 0.8, repeat: 0 }}
                    />
                </div>
                
            </div>

        </ContactoContainer>
    )
}

const ContactoContainer = styled.section`
    padding: 0 50px;
    @media (max-width: 850px) {
        padding: 0 20px;
    }
    .contenedor {
        margin-top: 150px;
        margin-left: 50px;
        text-align: center;
        @media (max-width: 680px) {
            margin: 180px 10px;
        }
        .iz {
            width: 70%;
            height: 100%;
            margin-bottom: 150px;
            .titulo {
                font-size: 52px;
                font-family: var(--italic);
                text-align: center;
                margin-bottom: 10px;
                @media (max-width: 1020px) {
                    font-size: 5vw;
                    margin-top: 50px;
                }
                @media (max-width: 650px) {
                    font-size: 24px;
                }
            }
            h2 {
                font-size: 64px;
                @media (max-width: 990px) {
                    font-size: 4vw;
                }
                @media (max-width: 650px) {
                    font-size: 18px;
                }
                a {
                    font-family: var(--italic);
                }
            }
            i {
                font-size: 52px;
                font-style: normal;
                font-family: var(--italic);
                @media (max-width: 990px) {
                    font-size: 4vw;
                }
                @media (max-width: 650px) {
                    font-size: 18px;
                }
            }
            form {
                width: 100%;
                margin-top: 20px;
                input {
                    display: block;
                    width: 100%;
                    margin-bottom: 10px;
                    padding: 10px;
                    text-align: center;
                    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                        font-family: var(--italic);
                        font-size: 32px;
                        @media (max-width: 990px) {
                            font-size: 4vw;
                        }
                        @media (max-width: 650px) {
                            font-size: 18px;
                        }
                    }
                    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
                        font-family: var(--italic);
                        font-size: 32px;
                        @media (max-width: 990px) {
                            font-size: 4vw;
                        }
                        @media (max-width: 650px) {
                            font-size: 18px;
                        }
                    }
                    &::-ms-input-placeholder { /* Microsoft Edge */
                        font-family: var(--italic);
                        font-size: 32px;
                        @media (max-width: 990px) {
                            font-size: 4vw;
                        }
                        @media (max-width: 650px) {
                            font-size: 18px;
                        }
                    }
                }
                textarea {
                    width: 100%;
                    display: block;
                    padding: 10px;
                    height: 120px;
                    text-align: center;
                    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                        font-family: var(--italic);
                        font-size: 32px;
                        @media (max-width: 990px) {
                            font-size: 4vw;
                        }
                        @media (max-width: 650px) {
                            font-size: 18px;
                        }
                    }
                    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
                        font-family: var(--italic);
                        font-size: 32px;
                        @media (max-width: 990px) {
                            font-size: 4vw;
                        }
                        @media (max-width: 650px) {
                            font-size: 18px;
                        }
                    }
                    &::-ms-input-placeholder { /* Microsoft Edge */
                        font-family: var(--italic);
                        font-size: 32px;
                        @media (max-width: 990px) {
                            font-size: 4vw;
                        }
                        @media (max-width: 650px) {
                            font-size: 18px;
                        }
                    }
                }
                button {
                    background-color: black;
                    color: white;
                    font-family: var(--italic);
                    font-size: 32px;
                    display: block;
                    margin-top: 10px;
                    width: 100%;
                    padding: 10px;
                    @media (max-width: 990px) {
                        font-size: 4vw;
                    }
                    @media (max-width: 650px) {
                        font-size: 18px;
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
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-end;
            padding-right: 50px;
            .personaje {
                width: 300px;
                @media (max-width: 990px) {
                    width: 150px;
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

export default Contacto