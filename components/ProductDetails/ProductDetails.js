import { Text, Button } from '../../components'
import styled from 'styled-components'
import theme from '../../theme'
import { useRouter } from 'next/router'
import PRODUCT_DATA from '../../data/products.json'
import { Context } from '../../store'
import { useEffect, useContext, useState } from 'react'

const StyledMain = styled.main`
    padding: 9rem 10vw 3rem 10vw;
    display: flex;
    flex-direction: column;
    grid-gap: 3rem;

    .backBtn {
        text-align: left;
        width: 4rem;
        background: none;

        &:hover {
            color: ${theme.colors.primary}
        }
    }

    .productInfo {
        display: grid;
        grid-gap: 2rem;

        .productImage {
            height: 320px;
            background-image: ${props => `url("/product-${props.product}-${props.category}/mobile/image-product.jpg")`};
            background-size: cover;
            background-position: center;
        }

        .productDetails {
            display: flex;
            flex-direction: column;
            grid-gap: 1rem;
            justify-content: center;
        }
    }

    @media screen and (min-width: 768px) {
        .productInfo {
            grid-template-columns: 1.5fr 2fr;

            .productImage {
                height: 480px;
                background-image: ${props => `url("/product-${props.product}-${props.category}/tablet/image-product.jpg")`};
                background-size: cover;
                background-position: center;
            }
        }
    }

    @mnedia screen and (min-width: 1200px) {
        .productInfo {
            .productImage {
                height: 560px;
                background-image: ${props => `url("/product-${props.product}-${props.category}/desktop/image-product.jpg")`};
                background-size: cover;
                background-position: center;
            }
        }
    }
`

const ProductDetails = (props) => {
    const router = useRouter()
    const [ state, dispatch ] = useContext(Context);
    const [ count, setCount ] = useState(0);

    const products = PRODUCT_DATA[props.category].map(product => product.ref)
    const queryIndex = products.indexOf(props.product)
    const productData = PRODUCT_DATA[props.category][queryIndex]

    const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
    })

    const upCount = () => setCount(count + 1);
    const downCount = () => setCount(count - 1);

    const handleClick = () => {
        dispatch({ type: 'ADD_ITEMS', name: productData.ref, quantity: count })
    }

    useEffect(() => console.log(state), [state])

    return (
        <StyledMain {...props}>
            <button onClick={() => router.back()} className='backBtn'>
                Go Back
            </button>
            <div className='productInfo' >
                <div className='productImage' />
                <div className='productDetails'>
                    { productData.new_product && 
                    <Text 
                        textType='tertiary'
                        text='NEW PRODUCT'
                        color={theme.colors.primary}
                    />}
                    <Text 
                        textType='secondary'
                        text={productData.name}
                    />
                    <Text 
                        textType='tertiary'
                        text={productData.description}
                    />
                    <h3>{formatter.format(productData.price)}</h3>
                    <span>
                        <Button 
                            buttonType='primary'
                            label='Add to Cart'
                            handleClick={handleClick}
                        />
                    </span>
                </div>
            </div>
        </StyledMain>
    )
}

export default ProductDetails