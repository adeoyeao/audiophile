import styled from "styled-components";
import { theme } from "../Shared/theme";

const StyledShopButton = styled.a`
    text-decoration: none;
    font-size: ${theme.fontSize.smallBody.size};
    letter-spacing: ${theme.fontSize.smallBody.charSpace};
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        color: ${theme.colors.orange}
    }

    span {
        color: ${theme.colors.orange}
    }
`

export const ShopButton = () => {
    return (
        <StyledShopButton>
            Shop <span>{'>'}</span>
        </StyledShopButton>
    )
}