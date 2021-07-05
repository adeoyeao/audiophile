import styled from 'styled-components'
import theme from '../../theme'
import { useState, useEffect } from 'react'

const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 1rem;

    label {
        font-size: ${theme.fontSizes.extraSmall};
        font-weight: bold;
        text-transform: capitalize;
    }

    input {
        padding: 1rem;
        border-radius: 0.5rem;
        outline: none;
        border: none;
        appearance: none;
        width: 100%;
        background: none;
        border: 2px solid ${theme.colors.darkGrey};
    }

    @media screen and (min-width: 768px) {
        grid-column: ${props => `${props.start} / ${props.end}`}
    }
`

const Input = (props) => {
    const [ value, setValue ] = useState('')

    const handleChange = (e) => {
        const value = e.target.value
        setValue(value)
    }

    return (
        <StyledInput {...props}>
            <label>{props.label}</label>
            <input 
                placeholder={props.placeholder}
                type='text'
                onChange={handleChange}
                value={value}
                autoComplete="off"
                autoCapitalize="off"
                required/>
        </StyledInput>
    )
}

export default Input