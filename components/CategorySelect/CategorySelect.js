import theme from '../../theme'
import { Text, Button } from '../../components'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const CategorySection = styled.section`
    padding: 3rem 10vw;
    display: grid;
    grid-gap: 1rem;
    width: 100%;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    } 
`

const CategoryCard = styled.div`
    height: 220px;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    justify-items: center;
    width: 100%;

    img {
        grid-column: 1/2;
        grid-row: 1/3;
        z-index: 2;
        height: 100%;
    }

    .subCard {
        background: ${theme.colors.lightGrey};
        border-radius: 0.5rem;
        padding-top: 2rem;

        grid-column: 1/2;
        grid-row: 2/5;
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;
        grid-gap: 0.5rem;
        align-items: center;
        justify-content: center;
    }

    @media screen and (min-width: 1200px) {
        height: 280px;
    }
`

const CategorySelect = (props) => {
    const categories = ['headphones', 'speakers', 'earphones']
    const router = useRouter()

    const handleClick = (category) => { 
        router.push(`/products/${category}`)
    }

    return (
        <CategorySection>
            { categories.map(category => (
                    <CategoryCard category={category} key={category}>
                        <img src={`/shared/desktop/image-${category}.png`} />
                        <div className='subCard'>
                            <Text 
                                text={category.toUpperCase()}
                                textType='tertiary'
                                align='center'
                            />
                            <Button 
                                label='SHOP'
                                buttonType='tertiary'
                                handleClick={() => { 
                                    handleClick(category)
                                    if(props.closeMenu) {
                                        props.closeMenu()
                                    }
                                }}
                            />
                        </div>
                    </CategoryCard>
            ))}
        </CategorySection>
    )
}

export default CategorySelect