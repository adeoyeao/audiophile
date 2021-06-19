import theme from '../../theme'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Text, Button } from '../../components'
import { useRouter } from 'next/router'

const StyledMain = styled.main`
    background-image: url("/home/mobile/image-header.jpg");
    background-size: cover;
    background-position: center;
    
    height: ${props => `${props.viewHeight * 0.75}px`};
    padding: 138px 10vw 3rem 10vw;
    width: 100vw;

    display: flex;
    flex-direction: column;
    grid-gap: 2rem;
    justify-content: center;
    align-items: center;

    h1, h2, p {
        width: 80%;
    }

    @media screen and (min-width: 768px) {
        background-image: url("/home/tablet/image-header.jpg");
        background-size: contain;
    }

    @media screen and (min-width: 1200px) {
        background-image: url("/home/desktop/image-hero.jpg");
        background-size: cover;
        height: ${props => `${props.viewHeight}px`};
        align-items: unset;
        min-height: 768px;

        h1, h2, p {
            width: 50%;
        }
    }
`
const LandingPage = (props) => {
    const [viewHeight, setViewHeight] = useState('0vh');
    const [align, setAlign] = useState('center')
    const router = useRouter()

    const landingPageProps = {
        ...props,
        viewHeight,
    }

    const handleResize = () => {
        setViewHeight(`${window.innerHeight}`)
        window.innerWidth > 1200 ? setAlign('left') : setAlign('center')
    }

    const handleClick = () => {
        router.push('/products/headphones')
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <StyledMain {...landingPageProps}>
            <Text 
            textType='secondary'
            text='New Product'
            color={theme.colors.grey}
            align={align}/>
            <Text 
            textType='primary'
            text='XX99 Mark II Headphones'
            color={theme.colors.white}
            align={align}/>
            <Text 
            textType='tertiary'
            text='Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.'
            color={theme.colors.grey}
            align={align}/>
            <Button 
            buttonType='primary'
            label='See Product'
            handleClick={handleClick}
            />  
        </StyledMain>
    )
}

export default LandingPage