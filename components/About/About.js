import theme from '../../theme'
import { Text } from '../../components'
import styled from 'styled-components'

const StyledSection = styled.section`
    padding: 3rem 10vw;
    display: flex;
    flex-direction: column;
    grid-gap: 2rem;

    article {
        display: flex;
        flex-direction: column;
        grid-gap: 2rem;
        align-items: center;

        .aboutText {
            display: flex;
            flex-direction: column;
            grid-gap: 1rem;
        }
    }

    .bestGear {
        background-image: url("/shared/mobile/image-best-gear.jpg");
        background-size: cover;
        background-position: center;
        border-radius: 0.5rem;
        height: 300px;
    }

    @media screen and (min-width: 768px) {
        .bestGear {
            background-image: url("/shared/tablet/image-best-gear.jpg");
            background-size: cover;
            background-position: center;
        }
    }

    @media screen and (min-width: 1200px) {
        display: grid;
        grid-template-columns: 1fr 1fr;

        article {
            grid-column: 1/2;
            grid-row: 1/2;
            justify-content: center;

            h2, p {
                text-align: left;
                width: unset;
            }
        }

        .bestGear {
            height: 580px;
            grid-column: 2/3;
            background-image: url("/shared/desktop/image-best-gear.jpg");
            background-size: cover;
            background-position: center;
        }
    }

`

const About = () => {
    return (
        <StyledSection>
            <div className='bestGear' />
            <article>
                <Text 
                    textType='secondary'
                    text='Bringing you the best audio gear'
                    align='center'
                    color={theme.colors.primary}
                />
                <div className='aboutText'>
                <Text
                    textType='tertiary'
                    text='Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.'
                    align='center'
                    color={theme.colors.darkGrey}
                />
                <Text
                    textType='tertiary'
                    text='We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products.'
                    align='center'
                    color={theme.colors.darkGrey}
                />
                <Text
                    textType='tertiary'
                    text='Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.'
                    align='center'
                    color={theme.colors.darkGrey}
                />
                </div>
            </article>
        </StyledSection>
    )
}

export default About