import theme from '../../theme'
import { CategorySelect } from '../../components'
import styled from 'styled-components'
import { useEffect } from 'react'

const StyledSection = styled.section`
    background: ${theme.colors.darkGrey};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    padding-top: 90px;
    padding-bottom: 90px;
    overflow-y: scroll;
`

const Menu = (props) => {
    return (
        <StyledSection>
            <CategorySelect closeMenu={props.closeMenu}/>
        </StyledSection>
    )
}

export default Menu