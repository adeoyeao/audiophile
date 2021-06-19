import styled from 'styled-components'
import theme from '../../theme'

const buttonOptions = {
    primary: `
        background: ${theme.colors.primary};
        color: ${theme.colors.white};

        &:hover {
            background: ${theme.colors.secondary};
        }
    `,
    secondary: `
        background: none;
        color: ${theme.colors.black};
        border: 2px solid ${theme.colors.black};

        &:hover {
            background: ${theme.colors.black};
            color: ${theme.colors.white};
        }
    `,
    tertiary: `
        background: none;
        color: ${theme.colors.black};
        opacity: 75%;

        &:hover {
            color: ${theme.colors.primary};
        }

        span {
            color: ${theme.colors.primary};
            font-weight: bold;
        }
    `
}

const StyledButton = styled.button`
    padding: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    max-width: 10rem;
    ${props => buttonOptions[props.buttonType]}
`

const Button = (props) => {
    return (
        <StyledButton {...props} onClick={props.handleClick}>{ props.label}<span>{ props.buttonType === 'tertiary' && ` >`}</span></StyledButton>
    )
}

export default Button