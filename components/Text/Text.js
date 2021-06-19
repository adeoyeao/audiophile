import styled from 'styled-components'
import theme from '../../theme'

const StyledHeading1 = styled.h1`
    font-size: ${theme.fontSizes.medium};
    font-weight: bold;
    letter-spacing: 2px;
    color: ${props => props.color};
    text-transform: uppercase;
    text-align: ${props => props.align};

    @media screen and (min-width: 768px) {
        font-size: ${theme.fontSizes.large};
        letter-spacing: 3px;
    }

    @media screen and (min-width: 1200px) {
        font-size: ${theme.fontSizes.extraLarge};
        letter-spacing: 4px;
    }
`

const StyledHeading2 = styled.h2`
    font-size: ${theme.fontSizes.small};
    font-weight: bold;
    letter-spacing: 4px;
    color: ${props => props.color};
    text-transform: uppercase;
    text-align: ${props => props.align};

    @media screen and (min-width: 768px) {
        font-size: ${theme.fontSizes.medium};
        letter-spacing: 6px;
    }

    @media screen and (min-width: 1200px) {
        font-size: ${theme.fontSizes.large};
        letter-spacing: 8px;
    }
`

const Paragraph = styled.p`
    font-size: ${theme.fontSizes.extraSmall};
    letter-spacing: 2px;
    color: ${props => props.color};
    text-align: ${props => props.align};

    @media screen and (min-width: 768px) {
        font-size: ${theme.fontSizes.small};
        letter-spacing: 4px;
    }
`


const Text = (props) => {
    const textOptions = {
        primary: <StyledHeading1 {...props}>{props.text}</StyledHeading1>,
        secondary: <StyledHeading2 {...props}>{props.text}</StyledHeading2>,
        tertiary: <Paragraph {...props}>{props.text}</Paragraph>
    }

    return ( textOptions[props.textType] )
}

export default Text