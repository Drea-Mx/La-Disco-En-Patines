import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';

const Header = () => {

    var pathLink = typeof window !== 'undefined' ? window.location.pathname : ''

    const languages = ['es', 'en']

    
    return(
        <HeaderContainer>
            <div className='left'>
                <p>SÍGUENOS</p>
                <a rel="noreferrer" href='https://www.instagram.com/discoenpatines/' target='_blank'>
                    <img src='insta.svg' alt='Link to Instagram' />
                </a>
            </div>

            <ul className="lang">
                {languages.map((lng,) => (
                <li key={lng}>
                    <Link to={lng === 'es' ? pathLink : '/en' + pathLink} language={lng}>
                    {lng === 'es' ? 'Es | ' : ' En'}
                    </Link>
                </li>
                ))}
            </ul>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    .left {
        display: flex;
        align-items: center;
        padding: 20px;
        position: fixed;
        top: 0;
        left: 0;
        p {
            font-size: 1.333333rem;
        }
        img {
            width: 30px;
            margin-left: 20px;
        }
    }

    ul.lang {
        padding: 40px;
        display: flex;
        font-size: 1.333rem;
        position: fixed;
        top: 0;
        right: 0;
        a {
            text-transform: uppercase;
            margin-left: 5px;
            font-weight: 700;
        }
    }
`

export default Header