import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

const Galeria = () => {
    return(
        <GaleriaContainer>
            <Link to='/' className="logo">
                <motion.img src="logo2.svg" alt='Logo La Disco En Patines'
                    initial={{ y: "-100%" }}
                    animate={{ y: "0" }}
                    transition={{ delay: 0, duration: 0.5, repeat: 0 }}
                />
            </Link>
            <motion.h1
                initial={{ x: "-100%" }}
                animate={{ x: "0" }}
                transition={{ delay: 0.3, duration: 0.5, repeat: 0 }}
            >FOTOS EVENTO <span>X DANIELA VILLAREAL</span></motion.h1>
            <motion.div 
                className="galeria"
                initial={{ y: "200%" }}
                animate={{ y: "0" }}
                transition={{ delay: 0.5, duration: 0.5, repeat: 0 }}
            >
                <div className="image column2">
                    <StaticImage
                        style={{ height: "100%", width: "100%" }}
                        src="../../assets/images/image1.jpg"
                        alt="Patines"
                        placeholder="blurred"
                        layout="fullWidth"
                        loading='lazy'
                    />
                    <div className="overflow">
                        <StaticImage
                            style={{ height: "100%", width: "100%" }}
                            src="../../assets/images/image1.jpg"
                            alt="Patines"
                            placeholder="blurred"
                            layout="fullWidth"
                            loading='lazy'
                        />
                    </div>
                </div>
                <div className="image column1">
                    <StaticImage
                        style={{ height: "100%", width: "100%" }}
                        src="../../assets/images/image2.jpg"
                        alt="Patines"
                        placeholder="blurred"
                        layout="fullWidth"
                        loading='lazy'
                    />
                    <div className="overflow">
                        <StaticImage
                            style={{ height: "100%", width: "100%" }}
                            src="../../assets/images/image2.jpg"
                            alt="Patines"
                            placeholder="blurred"
                            layout="fullWidth"
                            loading='lazy'
                        />
                    </div>
                </div>
                <div className="image column2">
                    <StaticImage
                        style={{ height: "100%", width: "100%" }}
                        src="../../assets/images/image3.jpg"
                        alt="Patines"
                        placeholder="blurred"
                        layout="fullWidth"
                        loading='lazy'
                    />
                    <div className="overflow">
                        <StaticImage
                            style={{ height: "100%", width: "100%" }}
                            src="../../assets/images/image3.jpg"
                            alt="Patines"
                            placeholder="blurred"
                            layout="fullWidth"
                            loading='lazy'
                        />
                    </div>
                </div>
                <div className="image column2">
                    <StaticImage
                        style={{ height: "100%", width: "100%" }}
                        src="../../assets/images/image4.jpg"
                        alt="Patines"
                        placeholder="blurred"
                        layout="fullWidth"
                        loading='lazy'
                    />
                    <div className="overflow">
                        <StaticImage
                            style={{ height: "100%", width: "100%" }}
                            src="../../assets/images/image4.jpg"
                            alt="Patines"
                            placeholder="blurred"
                            layout="fullWidth"
                            loading='lazy'
                        />
                    </div>
                </div>
                <div className="image column1">
                    <StaticImage
                        style={{ height: "100%", width: "100%" }}
                        src="../../assets/images/image5.jpg"
                        alt="Patines"
                        placeholder="blurred"
                        layout="fullWidth"
                        loading='lazy'
                    />
                    <div className="overflow">
                        <StaticImage
                            style={{ height: "100%", width: "100%" }}
                            src="../../assets/images/image5.jpg"
                            alt="Patines"
                            placeholder="blurred"
                            layout="fullWidth"
                            loading='lazy'
                        />
                    </div>
                </div>
                <div className="image column2">
                    <StaticImage
                        style={{ height: "100%", width: "100%" }}
                        src="../../assets/images/image6.jpg"
                        alt="Patines"
                        placeholder="blurred"
                        layout="fullWidth"
                        loading='lazy'
                    />
                    <div className="overflow">
                        <StaticImage
                            style={{ height: "100%", width: "100%" }}
                            src="../../assets/images/image6.jpg"
                            alt="Patines"
                            placeholder="blurred"
                            layout="fullWidth"
                            loading='lazy'
                        />
                    </div>
                </div>
                <div className="image column1">
                    <StaticImage
                        style={{ height: "100%", width: "100%" }}
                        src="../../assets/images/image7.jpg"
                        alt="Patines"
                        placeholder="blurred"
                        layout="fullWidth"
                        loading='lazy'
                    />
                    <div className="overflow">
                        <StaticImage
                            style={{ height: "100%", width: "100%" }}
                            src="../../assets/images/image7.jpg"
                            alt="Patines"
                            placeholder="blurred"
                            layout="fullWidth"
                            loading='lazy'
                        />
                    </div>
                </div>
                <div className="image column1">
                    <StaticImage
                        style={{ height: "100%", width: "100%" }}
                        src="../../assets/images/image8.jpg"
                        alt="Patines"
                        placeholder="blurred"
                        layout="fullWidth"
                        loading='lazy'
                    />
                    <div className="overflow">
                        <StaticImage
                            style={{ height: "100%", width: "100%" }}
                            src="../../assets/images/image8.jpg"
                            alt="Patines"
                            placeholder="blurred"
                            layout="fullWidth"
                            loading='lazy'
                        />
                    </div>
                </div>
                <div className="image column2">
                    <StaticImage
                        style={{ height: "100%", width: "100%" }}
                        src="../../assets/images/image9.jpg"
                        alt="Patines"
                        placeholder="blurred"
                        layout="fullWidth"
                        loading='lazy'
                    />
                    <div className="overflow">
                        <StaticImage
                            style={{ height: "100%", width: "100%" }}
                            src="../../assets/images/image9.jpg"
                            alt="Patines"
                            placeholder="blurred"
                            layout="fullWidth"
                            loading='lazy'
                        />
                    </div>
                </div>
                <div className="image column1">
                    <StaticImage
                        style={{ height: "100%", width: "100%" }}
                        src="../../assets/images/image10.jpg"
                        alt="Patines"
                        placeholder="blurred"
                        layout="fullWidth"
                        loading='lazy'
                    />
                    <div className="overflow">
                        <StaticImage
                            style={{ height: "100%", width: "100%" }}
                            src="../../assets/images/image10.jpg"
                            alt="Patines"
                            placeholder="blurred"
                            layout="fullWidth"
                            loading='lazy'
                        />
                    </div>
                </div>
                <div className="image column1">
                    <StaticImage
                        style={{ height: "100%", width: "100%" }}
                        src="../../assets/images/image11.jpg"
                        alt="Patines"
                        placeholder="blurred"
                        layout="fullWidth"
                        loading='lazy'
                    />
                    <div className="overflow">
                        <StaticImage
                            style={{ height: "100%", width: "100%" }}
                            src="../../assets/images/image11.jpg"
                            alt="Patines"
                            placeholder="blurred"
                            layout="fullWidth"
                            loading='lazy'
                        />
                    </div>
                </div>
            </motion.div>
            

        </GaleriaContainer>
    )
}

const GaleriaContainer = styled.section`
    padding: 0 50px 200px;
    @media (max-width: 850px) {
        padding: 0 20px 300px;
    }
    .column1 {
        grid-column: span 1;
        @media (max-width: 850px) {
            grid-column: span 1;
        }
    }
    .column2 {
        grid-column: span 2;
        @media (max-width: 850px) {
            grid-column: span 1;
        }
    }
    .galeria {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-gap: 20px;
        margin-top: 50px;
        @media (max-width: 850px) {
            grid-template-columns: repeat(2, 1fr);
        }
        .image {
            position: relative;
            height: 176px;
            @media (max-width: 850px) {
                height: 300px;
            }
            &:hover {
                .overflow {
                    display: block !important;
                }
            }
            .overflow {
                display: none;
                position: absolute;
                top: -50%;
                left: 20%;
                width: 40vw;
                max-width: 50vw;
                max-height: 50vh;
                z-index: 1;
            }
            &:nth-child(2) {
                .overflow {
                    width: 25vw;
                    left: -50%;
                    top: -100px;
                }
            }
            &:nth-child(4) {
                .overflow {
                    left: -50%;
                }
            }
            &:nth-child(5) {
                .overflow {
                    left: -200%;
                    top: -100%;
                    width: 25vw;
                }
            }
            &:nth-child(6) {
                .overflow {
                    left: -200%;
                    top: -100%;
                }
            }
            &:nth-child(7) {
                .overflow {
                    left: 200%;
                    top: -200%;
                    width: 25vw;
                }
            }
            &:nth-child(8) {
                .overflow {
                    left: 200%;
                    top: -200%;
                    width: 25vw;
                }
            }
            &:nth-child(10) {
                .overflow {
                    left: 100%;
                    top: -200%;
                    width: 25vw;
                }
            }
            &:nth-child(11) {
                .overflow {
                    left: -100%;
                    top: -200%;
                    width: 25vw;
                }
            }
        }
    }
    h1, h2 {
        margin-top: 150px;
        font-size: 64px;
        span {
            font-family: var(--italic);
        }
        @media (max-width: 1020px) {
                    font-size: 5vw;
                }
                @media (max-width: 650px) {
                    font-size: 24px;
                }
    }

    h2 {
        margin-top: 30px;
        &:last-child {
            margin-top: 10px !important;
        }
        @media (max-width: 1020px) {
                    font-size: 5vw;
                    margin-top: 50px;
                }
                @media (max-width: 650px) {
                    font-size: 24px;
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

export default Galeria
