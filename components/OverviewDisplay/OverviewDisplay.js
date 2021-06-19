import styled from 'styled-components'
import theme from '../../theme'
import { Text, Button } from '../../components'
import { useRouter } from 'next/router'

const productOptions = {
    zx9: `
        background-color: ${theme.colors.primary};
        background-image: url("/shared/desktop/swirl.png");
        overflow: hidden;
        align-items: center;
        height: 600px;

        .speaker {
            height: 240px;
            width: 200px;
            background-image: url("/home/mobile/image-speaker-zx9.png");
            background-size: contain;
            background-repeat: no-repeat;
            display: grid;
        }

        @media screen and (min-width: 768px) {
            .speaker {
                background-image: url("/home/tablet/image-speaker-zx9.png")
            }
        }

        @media screen and (min-width: 1200px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr auto 0.75fr;
            grid-gap: 2rem;

            .speaker {
                background-image: url("/home/desktop/image-speaker-zx9.png");
                background-position: center bottom;
                height: 100%;
                width: 100%;
                grid-row: 1/4;
                transform: translateY(10%)
            }

            h1, p {
                text-align: left;
                align-self: end;
            }

            button {
                align-self: start;
            }
        }
    `,
    zx7: `
        background-image: url("/home/mobile/image-speaker-zx7.jpg");
        background-size: cover;
        background-position: center right;
        overflow: hidden;
        height: 320px;

        @media screen and (min-width: 768px) {
            background-image: url("/home/tablet/image-speaker-zx7.jpg");
            background-size: cover;
            background-position: center right;     
        }

        @media screen and (min-width: 1200px) {
            background-image: url("/home/desktop/image-speaker-zx7.jpg");
            background-size: cover;
            background-position: center right;             
        }
    `,
    yx1_a: `
        min-height: 200px;
        background-image: url("/home/mobile/image-earphones-yx1.jpg");
        background-size: cover;

        @media screen and (min-width: 768px) {
            min-height: 320px;
            background-image: url("/home/tablet/image-earphones-yx1.jpg");
            background-size: cover;
            background-position: center;
        }

        @media screen and (min-width: 768px) {
            background-image: url("/home/desktop/image-earphones-yx1.jpg");
            background-size: cover;
            background-position: center;
        }
    `,
    yx1_b: `
        min-height: 200px;
        background: ${theme.colors.lightGrey}
    `
}

const StyledSection = styled.section`
    padding: 3rem 10vw;
    display: grid;
    grid-gap: 1rem;
    grid-template-areas: 
    "zx9"
    "zx9"
    "zx9"
    "zx9"
    "zx7"
    "zx7"
    "yx1_a"
    "yx1_b";

    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
        "zx9 zx9"
        "zx9 zx9"
        "zx7 zx7"
        "yx1_a yx1_b";
    };
`

const Card = styled.div`
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-gap: 2rem;
    padding: 2rem;
    grid-area: ${props => props.product};

    ${props => productOptions[props.product]}
`

const products = [
    {
        ref: 'zx9',
        name: 'ZX9 Speaker',
        text: 'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.',
        url: 'zx9',
        query: 'speakers',
        textType: 'primary',
        color: theme.colors.white
    },
    {
        ref: 'zx7',
        name: 'ZX7 Speaker',
        url: 'zx7',
        query: 'speakers',
        textType: 'secondary',
        color: theme.colors.black
    },
    {
        ref: 'yx1_a'
    },
    {
        ref: 'yx1_b',
        name: 'YX1 Earphones',
        url: 'yx1',
        query: 'earphones',
        textType: 'secondary',
        color: theme.colors.black
    }
]

const OverviewDisplay = () => {
    const router = useRouter() 

    const handleClick = (query, product) => {
        router.push(`/products/${query}/${product}`)
    }

    return (
        <StyledSection>
            { products.map(product => (
                <Card product={product.ref} key={product.ref}>
                    { product.ref === 'zx9' && 
                        <div className='speaker' /> 
                    }
                    { product.name && 
                    <Text 
                        textType={product.textType}
                        text={product.name}
                        align={product.textType === 'primary' && 'center'}
                        color={product.color}
                    /> }
                    { product.text && 
                    <Text 
                        textType='tertiary'
                        text={product.text}
                        align='center'
                        color={product.color}
                    />
                    }
                    {
                        product.query && product.url && 
                        <Button 
                            buttonType='secondary'
                            label='See Product'
                            handleClick={() => handleClick(product.query, product.url)}
                        />
                    }
                </Card>
            ))}

        </StyledSection>
    )
}

export default OverviewDisplay