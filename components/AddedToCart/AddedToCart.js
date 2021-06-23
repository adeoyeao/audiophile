import theme from '../../theme'
import styled from 'styled-components'
import { Text, Button } from '..'

const StyledSection = styled.section`
    background: rgba(0, 0, 0, 0.75);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;

    display: grid;
    place-items: center;

    .card {
        width: 40vw;
        min-width: 200px;
        height: auto;
        border-radius: 0.5rem;
        background: ${theme.colors.white};
        box-shadow: 0px 4px 16px rgba(0, 0 ,0 , 0.2);
        display: flex;
        flex-direction: column;
        grid-gap: 2rem;
        justify-content: center;
        align-items: center;
        padding: 2rem;

        .cardIcon {
            height: 4rem;
            width: 100%;
            background-image: url("/shared/desktop/check.svg");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
    }
`

const AddedToCart = (props) => {
    return (
        <StyledSection>
            <div className='card'>
                <Text 
                textType='tertiary'
                text={`${props.count} Added To Cart`}
                align='center'
                color={theme.colors.primary}/>
                <div className='cardIcon' />
                <Button 
                buttonType='tertiary'
                label='back to shop'
                handleClick={props.handleClick}/>
            </div>
        </StyledSection>
    )
}

export default AddedToCart