import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion"

const QueEs = () => {
    return(
        <QueEsContainer>
            <Link to='/' className="logo">
                <motion.img src="logo2.svg" alt='Logo La Disco En Patines'
                    initial={{ y: "-100%" }}
                    animate={{ y: "0" }}
                    transition={{ delay: 0, duration: 0.5, repeat: 0 }}
                />
            </Link>
            <a rel="noreferrer" href="https://youtu.be/RnXAuT6m_y4" target='_blank' className="disco">
                <img src="disco.png" alt='Esfera Disco' />
                <div className="texto">
                    <i className="ve">VE EL RESUMEN DEL</i>
                    <span className="capitulo">CAPITULO</span>
                    <i className="monterrey">MONTERREY</i>
                </div>
            </a>
            <h1>¿QUE ES LA DISCO EN PATINES?</h1>
            <div className="textoo">
                <p>La comunidad LGBTQI+ celebra durante el mes de junio el orgullo de ser así como los avances que hemos logrado a través de la lucha por el reconocimiento de derechos, que activistas, asociaciones y civiles han alcanzado a través de las últimas décadas.</p>

                    <p>La falta de visibilidad social nos lleva a crear, a convocar a los mejores, a sumar, a generar una experiencia multidisciplinaria dentro de un ambiente sano y familiar. </p>

                    <p>Éste tipo de experiencias suman a exponencializar la visibilidad social y la inclusión, generando en gran medida beneficios, como lo son: el contrarrestar y erradicar la homofobia, los crímenes de odio y los ataques a los miembros de nuestra comunidad LGBTQI+.</p>

                    <p>Trabajemos en seguir sumando en la representatividad de los miembros de la comunidad, para efectos de sumar esfuerzos, reconocer trayectorias y ser siempre una plataforma en donde todes tengan cabida y la oportunidad de crecimiento, hasta lograr ser una sociedad inclusiva en todos los aspectos.</p>

                    <p>Siempre agradecidos por el apoyo de grandes alianzas gubernamentales y comerciales, ya que sin ellos la materialización de este objetivo no sería posible.</p>
            </div>

        </QueEsContainer>
    )
}

const QueEsContainer = styled.section`
    padding: 0 50px;
    max-width: 979px;
    margin: 0 auto;
    box-sizing: content-box;
    @media (max-width: 850px) {
        padding: 0 20px;
    }
    h1 {
        font-size: 64px;
        text-align: center;
        margin-top: 90px;
        margin-bottom: 50px;
        @media (max-width: 1020px) {
            font-size: 52px;
            margin-top: 50px;
        }
        @media (max-width: 850px) {
            font-size: 32px;
        }
    }
    .textoo {
        text-align: center;
        padding-bottom: 100px;
        p {
            font-size: 24px;
            line-height: 28.8px;
            margin-bottom: 30px;
            @media (max-width: 650px) {
                font-size: 20px;
                line-height: 22.8px;
            }
        }
    }
    
    .logo {
        display: block;
        padding: 0 50px;
        max-width: 800px;
        margin: 40px auto;   
        @media (max-width: 1020px) {
            margin-top: 90px;
        }  
    }
    .disco {
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        width: 192px;
        right: 20px;
        @media (max-width: 950px) {
            width: 100px !important;
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
`

export default QueEs
