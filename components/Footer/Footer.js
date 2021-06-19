import styled from 'styled-components';
import theme from '../../theme';
import { Text } from '../../components';
import Link from 'next/link';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { useState } from 'react'

const StyledFooter = styled.footer`
    padding: 3rem 10vw;
    background: ${theme.colors.black};

    display: flex;
    flex-direction: column;
    grid-gap: 3rem;
    align-items: center;

    .logo {
        width: 140px;
        cursor: pointer;
    }

    .navbar {
        display: flex;
        flex-direction: column;
        grid-gap: 2rem;

        li {
            color: ${theme.colors.white};
            list-style-type: none;
            text-transform: uppercase;
            text-align: center;
            cursor: pointer;

            &:hover {
                color: ${theme.colors.primary}
            }
        }
    }

    div {
        display: flex;
        grid-gap: 1rem;
    }

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(4, auto);
        grid-gap: 2rem;

        .logo {
            align-self: start;
            grid-column: 1/3;
        }

        .navbar {
            align-self: start;
            grid-column: 1/3;
            flex-direction: row;
        }

        p {
            text-align: left;

            &:nth-of-type(1) {
                grid-column: 1/3;
                width : 75%;
            }
        }

        div {
            justify-content: flex-end;
        }
    }
`

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    const noHover = {
        facebook: false,
        twitter: false,
        instagram: false
    }

    const [ hover, setHover ] = useState(noHover)

    const handleMouseOver = (social) => {
        setHover(prev => (
            {
                ...prev,
                [social]: true
            }
        ))
    }

    const handleMouseOut = (social) => {
        setHover(noHover) 
    }

    const defaultStyle = {
        cursor: 'pointer',
        height: '32px',
        width: '32px'
    }

    return (
        <StyledFooter>
            <Link href='/'>
                <img src='/shared/desktop/logo.svg' className='logo'/> 
            </Link>
            <ul className='navbar'>
                <Link href='/products/headphones'>
                    <li>headphones</li>
                </Link>
                <Link href='/products/speakers'>
                    <li>speakers</li>
                </Link>
                <Link href='/products/earphones'>
                    <li>earphones</li>
                </Link>
            </ul>
            <Text 
                textType='tertiary'
                text="Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week."
                color={theme.colors.darkGrey}
                align='center'
            />
            <Text 
                textType='tertiary'
                text={`Copyright ${year}. All Rights Reserved`}
                color={theme.colors.darkGrey}
                align='center'
            />
            <div>
                <FacebookIcon onMouseEnter={() => handleMouseOver('facebook')} onMouseLeave={handleMouseOut} style={{ color: hover.facebook ? theme.colors.primary : theme.colors.white, ...defaultStyle }}/>
                <TwitterIcon onMouseEnter={() => handleMouseOver('twitter')} onMouseLeave={handleMouseOut} style={{ color: hover.twitter ? theme.colors.primary : theme.colors.white, ...defaultStyle }}/>
                <InstagramIcon onMouseEnter={() => handleMouseOver('instagram')} onMouseLeave={handleMouseOut} style={{ color: hover.instagram ? theme.colors.primary : theme.colors.white, ...defaultStyle }}/>
            </div>
        </StyledFooter>
    )
}

export default Footer