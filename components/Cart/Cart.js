import { Context } from '../../store'
import { Text, Button } from '../../components'
import theme from '../../theme'
import styled from 'styled-components'
import useRouter from 'next'
import { useContext, useEffect, useState } from 'react'

const StyledSection = styled.section`
    background: rgba(0, 0, 0, 0.75);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    padding: 8.5rem 10vw 3rem 10vw;
    z-index: 20;
    display: grid;
    jusfiy-items: center;

    .cart {
        width: 100%;
        max-width: 380px;
        border-radius: 0.5rem;
        background: ${theme.colors.white};
        padding: 2rem;
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: start;
        grid-gap: 1rem;

        .removeAllBtn {
            background: none;
            text-transform: uppercase;

            &:hover {
                color: ${theme.colors.primary}
            }
        }
    }

    @media screen and (min-width: 768px) {
        .cart {
            justify-self: end;
        }
    }
`

const Cart = () => {
    const router = useRouter()
    const [ state, dispatch ] = useContext(Context)
    const [ cartSize, setCartSize ] = useState()

    const reducer = (acc, cv) => acc + cv

    useEffect(() => setCartSize(Object.values(state).reduce(reducer)), [state])
    useEffect(() => console.log(state), [state])

    return (
        <StyledSection>
            <div className='cart'>
                <h3>Cart ({cartSize})</h3>
                <button className='removeAllBtn' onClick={() => dispatch({ type: 'RESET' })} >Remove All</button>
                <Button 
                    buttonType='primary'
                    label='Checkout'
                    // handleClick={checkout}
                />
            </div>
        </StyledSection>
    )
}

export default Cart