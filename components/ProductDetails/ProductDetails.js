import { Text, Button, AddedToCart } from '../../components'
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
        grid-gap: 3rem;

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

            .addToCart {
                display: flex;
                grid-gap: 1rem;
                align-items: center;

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
            }
        }
    }

    .features {
        display: flex;
        flex-direction: column;
        grid-gap: 2rem;

        div, span {
            display: flex;
            flex-direction: column;
            grid-gap: 1rem;
        }
    }

    .images {
        display: grid;
        grid-gap: 2rem;
        grid-template-rows: 1fr 1fr 2fr;
        grid-template-areas: 
        "image1"
        "image2"
        "image3"
        "image3";
        width: 100%;

        div {
            border-radius: 0.5rem;
        }

        .image1 {
            height: 180px;
            background-image: ${props => `url("/product-${props.product}-${props.category}/mobile/image-gallery-1.jpg")`};
            background-size: cover;
            background-position: center;
            grid-area: image1;
        }

        .image2 {
            height: 180px;
            background-image: ${props => `url("/product-${props.product}-${props.category}/mobile/image-gallery-2.jpg")`};
            background-size: cover;
            background-position: center;
            grid-area: image2;
        }

        .image3 {
            height: 360px;
            background-image: ${props => `url("/product-${props.product}-${props.category}/mobile/image-gallery-3.jpg")`};
            background-size: cover;
            background-position: center;
            grid-area: image3;
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

        .features {
            .inTheBox {
                display: grid;
                grid-template-columns: 1fr 1fr;
            }
        }

        .images {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            grid-template-areas:
            "image1 image3"
            "image2 image3";

            .image1 {
                height: 180px;
                background-image: ${props => `url("/product-${props.product}-${props.category}/tablet/image-gallery-1.jpg")`};
                background-size: cover;
                background-position: center;
            }
    
            .image2 {
                height: 180px;
                background-image: ${props => `url("/product-${props.product}-${props.category}/tablet/image-gallery-2.jpg")`};
                background-size: cover;
                background-position: center;
            }
    
            .image3 {
                height: 100%;
                background-image: ${props => `url("/product-${props.product}-${props.category}/tablet/image-gallery-3.jpg")`};
                background-size: cover;
                background-position: center;
            }
        }
    }

    @media screen and (min-width: 1200px) {
        .productInfo {
            .productImage {
                height: 560px;
                background-image: ${props => `url("/product-${props.product}-${props.category}/desktop/image-product.jpg")`};
                background-size: cover;
                background-position: center;
            }
        }

        .features {
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-gap: 3rem;

            .inTheBox {
                display: flex;
            }
        }

        .images {
            .image1 {
                height: 280px;
                background-image: ${props => `url("/product-${props.product}-${props.category}/desktop/image-gallery-1.jpg")`};
                background-size: cover;
                background-position: center;
            }
    
            .image2 {
                height: 280px;
                background-image: ${props => `url("/product-${props.product}-${props.category}/desktop/image-gallery-2.jpg")`};
                background-size: cover;
                background-position: center;
            }
    
            .image3 {
                height: 100%;
                background-image: ${props => `url("/product-${props.product}-${props.category}/desktop/image-gallery-3.jpg")`};
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
    const [ visible, setVisible ] = useState(false);

    const products = PRODUCT_DATA[props.category].map(product => product.ref)
    const queryIndex = products.indexOf(props.product)
    const productData = PRODUCT_DATA[props.category][queryIndex]

    const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
    })

    const upCount = (e) => { e.preventDefault(); setCount(count + 1) };
    const downCount = (e) => { 
        e.preventDefault();
        if(count === 0) {
            return
        } 
        setCount(count - 1) 
    };

    const handleClick = () => {
        dispatch({ type: 'ADD_ITEMS', name: productData.ref, quantity: count })
        setVisible(true);
    }

    const closeModal = () => {
        setVisible(false); setCount(0)
    }

    return (
        <StyledMain {...props}>
            { visible && 
            <AddedToCart 
            handleClick={closeModal}
            count={count}/> }
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
                    /> }
                    <Text 
                        textType='secondary'
                        text={productData.name}
                    />
                    <Text 
                        textType='tertiary'
                        text={productData.description}
                        color={theme.colors.darkGrey}
                    />
                    <h3>{formatter.format(productData.price)}</h3>
                    <div className='addToCart'>
                        <form>
                            <button className='downBtn' onClick={downCount}>-</button>
                            <input value={count} readOnly/>
                            <button className='upBtn' onClick={upCount}>+</button>
                        </form>
                        <Button 
                            buttonType='primary'
                            label='Add to Cart'
                            handleClick={handleClick}
                        />
                    </div>
                </div>
            </div>
            <section className='features'>
                <div>
                    <Text 
                        textType='secondary'
                        text='Features'
                    />
                    <Text 
                        textType='tertiary'
                        text={productData.features1}
                        color={theme.colors.darkGrey}
                    />
                    <Text 
                        textType='tertiary'
                        text={productData.features2}
                        color={theme.colors.darkGrey}
                    />
                </div>
                <div className='inTheBox'>
                    <Text 
                        textType='secondary'
                        text='In the Box'
                    />
                    <span>
                    { productData.inTheBox.map(item => (
                        <Text 
                            textType='tertiary'
                            text={`${item.quantity}x ${item.description}`}
                            color={theme.colors.primary}
                            key={item}
                        />
                    )) }
                    </span>
                </div>
            </section>
            <section className='images'>
                <div className='image1' />
                <div className='image2' />
                <div className='image3' />
            </section>
        </StyledMain>
    )
}

export default ProductDetails