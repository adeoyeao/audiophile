import { Context } from '../../store'
import { Text, Button } from '../../components'
import theme from '../../theme'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { ADD_ITEMS, REMOVE_ITEMS } from '../../store/cart/cartTypes'

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
        max-width: 500px;
        border-radius: 0.5rem;
        background: ${theme.colors.white};
        padding: 2rem;
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-rows: auto 1fr auto;
        align-items: start;
        grid-gap: 2rem;

        .items {
            display: flex;
            flex-direction: column;
            grid-column: 1/3;
            grid-gap: 2rem;
            overflow-y: scroll;
        }

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

const CartItem = styled.article`
    display: grid;
    grid-template-columns: auto 1fr auto;
    width: 100%;
    grid-gap: 2rem;
    height: 4rem;
    align-items: center;
    align-self: start;
    grid-column: 1/3;

    .itemImage {
        border-radius: 0.5rem;
        width: 4rem;
        height: 4rem;
        background-image: ${props => `url("/product-${props.item}-${props.category}/mobile/image-product.jpg")`};
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    form { 
        height: 100%;
        background: ${theme.colors.lightGrey};

        button {
            background: none;
            cursor: pointer;
            width: 2rem;
            height: 2rem;
            font-size: 2rem;
        }
    }

    input {
        height: 100%;
        padding: 0.25rem;
        width: 4rem;
        background: none;
        appearance: none;
        outline: none;
        border: none;
        text-align: center;
        font-size: 2rem;
    }

    h4 {
        font-weight: normal
    }

    @media screen and (min-width: 768px) {
        .itemImage {
            background-image: ${props => `url("/product-${props.item}-${props.category}/tablet/image-product.jpg")`};
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }
    }

    @media screen and (min-width: 1200px) {
        .itemImage {
            background-image: ${props => `url("/product-${props.item}-${props.category}/desktop/image-product.jpg")`};
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
`

const StyledForm = styled.form`

`

const Cart = (props) => {
    const router = useRouter()
    const [ state, dispatch ] = useContext(Context)
    const [ cartSize, setCartSize ] = useState()

    const reducer = (acc, cv) => acc + cv
    const selectedItems = Object.entries(state).filter(item => item[1] !== 0);

    const items = {
        zx9: {
            prices: 4500,
            category: 'speakers'
        },
        zx7: {
            prices: 3500,
            category: 'speakers'
        },
        xx59: {
            prices: 899,
            category: 'headphones'
        },
        xx99_mark_one: {
            prices: 1750,
            category: 'headphones'
        },
        xx99_mark_two: {
            prices: 2999,
            category: 'headphones'
        },
        yx1: {
            prices: 599,
            category: 'earphones'
        }
    }

    const total = selectedItems.map(item => item.length > 0 ? item[1] * items[item[0]].prices : [])
    const totalReduced = total.length > 0 ? total.reduce(reducer) : 0
    const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
    })

    const upCount = (e, item) => {
        e.preventDefault()
        dispatch({ type: ADD_ITEMS, name: item, quantity: 1 })
    }

    const downCount = (e, item) => { 
        e.preventDefault();
        if(state[item] === 0) {
            return
        } 
        dispatch({ type: REMOVE_ITEMS, name: item, quantity: 1 }) 
    };

    const checkout = () =>  {
        router.push('/checkout')
        props.closeMenu()
    }

    useEffect(() => setCartSize(Object.values(state).reduce(reducer)), [state])

    return (
        <StyledSection>
            <div className='cart'>
                <h3>Cart ({cartSize})</h3>
                <button className='removeAllBtn' onClick={() => dispatch({ type: 'RESET' })} >Remove All</button>
                <div className='items'>
                { selectedItems.map(item => {
                    return (
                        <CartItem item={item[0]} category={items[item[0]].category}>
                            <div className='itemImage' />
                            <div className='itemDetails'>
                                <h4>{item[0].toUpperCase().replace(/\_/ig,' ')}</h4>
                                <h3>{ formatter.format(items[item[0]].prices) }</h3>
                            </div>
                            <StyledForm>
                                <button className='downBtn' onClick={(e) => downCount(e, item[0])}>-</button>
                                <input value={state[item[0]]} readOnly/>
                                <button className='upBtn' onClick={(e) => upCount(e, item[0])}>+</button>
                            </StyledForm>
                        </CartItem>
                    )
                }) }
                </div>
                <Text 
                    textType='tertiary'
                    text='TOTAL'
                    color={theme.colors.darkGrey}
                />
                <Text 
                    textType='tertiary'
                    text={formatter.format(totalReduced)}
                    color={theme.colors.black}
                />
                <Button 
                    buttonType='primary'
                    label='Checkout'
                    handleClick={checkout}
                />
            </div>
        </StyledSection>
    )
}

export default Cart