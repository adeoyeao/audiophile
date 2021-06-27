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
        border: ${props => `2px solid ${props.valid ? theme.colors.darkGrey : theme.colors.primary}`}
    }

    @media screen and (min-width: 768px) {
        grid-column: ${props => `${props.start} / ${props.end}`}
    }
`

const Input = (props) => {
    const [ valid, setValid ] = useState(true)
    const [ value, setValue ] = useState('')

    const regex = props.regex

    const handleChange = (e) => {
        const value = e.target.value
        setValue(value)
        regex.test(value) ? setValid(true) : setValid(false)
    }

    const InputProps = {
        ...props,
        valid: valid
    }

    return (
        <StyledInput {...InputProps}>
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