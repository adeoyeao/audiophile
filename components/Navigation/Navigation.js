import styled from 'styled-components'
import theme from '../../theme'
import Link from 'next/link'
import { Menu } from '../../components'
import { useState } from 'react'

const StyledNavigation = styled.nav`
    height: 90px;
    background: ${theme.colors.black};
    border-bottom: 1px solid ${theme.colors.grey};
    padding: 0 10vw;

    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 5vw;

    z-index: 1000;
    position: fixed;
    width: 100vw;

    .hamburgerMenu {
        background: url("/shared/tablet/icon-hamburger.svg");
        background-size: cover;
        height: 1.25rem;
        width: 1.25rem;
    };

    .logo {
        cursor: pointer;
        justify-self: center;
    };

    .shoppingCart {
        background: url("/shared/desktop/icon-cart.svg");
        background-size: cover;
        height: 1.25rem;
        width: 1.5rem;
        justify-self: end;
    };

    .navbar {
        display: none;

        li {
            text-transform: uppercase;
            list-style-type: none;
            color: ${theme.colors.white};
            cursor: pointer;
            letter-spacing: 4px;

            &:hover {
                color: ${theme.colors.primary};
            }
        }
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: auto 1fr auto;

        .logo {
            justify-self: start;
        }
    }

    @media screen and (min-width: 1200px) {
        .hamburgerMenu {
            display: none;
        }

        .navbar {
            display: grid;
            grid-gap: 2rem;
            grid-template-columns: repeat(3, auto);
            justify-self: center;
        }
    }
`

const Navigation = ({ children }) => {
    const [ menuVisible, setMenuVisible ] = useState(false)
    const [ cartVisible, setCartVisible ] = useState(false)

    const menuClick = () => setMenuVisible(!menuVisible)
    const cartClick = () => setCartVisible(!cartVisible)

    return (
        <>
        <StyledNavigation>
            <button className='hamburgerMenu' onClick={menuClick}/>
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
            <button className='shoppingCart' onClick={cartClick} />
        </StyledNavigation>
        { menuVisible && <Menu />}
        { children }
        </>
    )
}

export default Navigation