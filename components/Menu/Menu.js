import theme from '../../theme'
import { CategorySelect } from '../../components'
import styled from 'styled-components'

const StyledSection = styled.section`
    background: ${theme.colors.darkGrey};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    padding-top: 90px;
    overflow-y: scroll;
`

const Menu = () => {
    return (
        <StyledSection>
            <CategorySelect />
        </StyledSection>
    )
}

export default Menu