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
            <Link className="disco">
                <img src="disco.png" alt='Esfera Disco' />
                <div className="texto">
                    <i className="ve">VE EL RESUMEN DEL</i>
                    <span className="capitulo">CAPITULO</span>
                    <i className="monterrey">MONTERREY</i>
                </div>
            </Link>
            <h1>¿QUE ES LA DISCO EN PATINES?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum venenatis odio, et varius velit aliquet nec. Nulla vel enim dignissim, bibendum arcu nec, dictum dolor. Aenean at dolor neque. Etiam vitae sapien in dolor commodo luctus. Quisque auctor egestas pretium. Ut viverra nisi eget enim elementum, id sollicitudin risus luctus. Nam ornare, lorem nec lobortis venenatis, urna nisl sodales tellus, vel dictum odio risus eget nulla.</p>
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
    p {
        font-size: 44px;
        line-height: 52.8px;
        text-align: center;
        height: 450px;
        overflow-y: scroll;
        padding-bottom: 100px;
        @media (max-width: 1020px) {
            font-size: 34px;
        }
        @media (max-width: 850px) {
            font-size: 24px;
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