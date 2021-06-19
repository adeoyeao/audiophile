import { Text, Button } from '../../components'
import theme from '../../theme'
import styled from 'styled-components'
import PRODUCT_DATA from '../../data/products.json'
import { useRouter } from 'next/router'

const StyledSection = styled.section`
    padding: 12rem 10vw 3rem 10vw;
    display: flex;
    flex-direction: column;
    grid-gap: 6rem;
`

const ProductCard = styled.article`
    display: grid;
    grid-gap: 2rem;
    border-radius: 0.25rem;

    .productImage {
        height: 350px;
        background-image: ${props => `url("/category-${props.query}/mobile/image-${props.url}.jpg")`};
        background-size: cover;
        background-position: center;
    }

    .productInfo {
        display: flex;
        flex-direction: column;
        grid-gap: 1rem;
        align-items: center;
    }

    @media screen and (min-width: 768px) {
        .productImage {
            background-image: ${props => `url("/category-${props.query}/tablet/image-${props.url}.jpg")`};
            background-size: cover;
            background-position: center;
        }

        .productInfo {
            h1, p {
                width: 75%
            }
        }
    }

    @media screen and (min-width: 1200px) {
        grid-template-columns: 1fr 1fr;

        .productImage {
            height: 560px;
            background-image: ${props => `url("/category-${props.query}/desktop/image-${props.url}.jpg")`};
            background-size: cover;
            background-position: center;

            grid-row: 1/2;
            grid-column: ${props => props.even ? '1/2' : '2/3'}
        }

        .productInfo {
            padding: 1rem;
            justify-content: center;
            align-items: start;

            h1, p {
                width: unset;
                text-align: left;
            }
        }
    }
`

const ProductCards = (props) => {
    const query = props.query
    const router = useRouter()

    const handleClick = (product) => {
        router.push(`/products/${query}/${product}`)
    }

    return (
        <StyledSection>
            { PRODUCT_DATA[query].map(product => (
                <ProductCard url={product.ref} query={query} even={product.id % 2 === 0}>
                    <div className='productImage' />
                    <div className='productInfo'>
                        { product.new_product && <Text 
                            textType='tertiary'
                            text='NEW PRODUCT'
                            color={theme.colors.primary}
                            align='center'
                        />}
                        <Text 
                            textType='primary'
                            text={product.name}
                            align='center'
                        />
                        <Text 
                            textType='tertiary'
                            text={product.description}
                            color={theme.colors.darkGrey}
                            align='center'
                        />
                        <Button 
                            buttonType='primary'
                            label='see product'
                            handleClick={() => handleClick(product.ref)}
                        />
                    </div>
                </ProductCard>
            ))}
        </StyledSection>
    )
}

export default ProductCards