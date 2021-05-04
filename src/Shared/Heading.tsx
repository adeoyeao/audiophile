import styled from "styled-components";
import { theme, ColorsType, FontSizeType } from "../Shared/theme";

type HeadingProps = {
  fontSize: FontSizeType;
  alignment: 'left' | 'center' | 'right';
  color: ColorsType;
};

export const Heading1 = styled.h1<HeadingProps>`
    color: ${(props) => theme.colors[props.color]};
    text-align: ${(props) => props.alignment};
    font-size: ${theme.fontSize.medium.size};
    line-height: ${theme.fontSize.medium.lineHeight};
    letter-spacing: ${theme.fontSize.medium.charSpace};

    @media (min-width: 500px) {
        font-size: ${theme.fontSize.extraLarge.size};
        line-height: ${theme.fontSize.extraLarge.lineHeight};
        letter-spacing: ${theme.fontSize.extraLarge.charSpace};
    }
`;

export const Heading2 = styled.h2<HeadingProps>`
    color: ${(props) => theme.colors[props.color]};
    text-align: ${(props) => props.alignment};
    font-size: ${theme.fontSize.largeBody.size};
    line-height: ${theme.fontSize.largeBody.lineHeight};
    letter-spacing: ${theme.fontSize.largeBody.charSpace};

    @media (min-width: 500px) {
        font-size: ${theme.fontSize.large.size};
        line-height: ${theme.fontSize.large.lineHeight};
        letter-spacing: ${theme.fontSize.large.charSpace};
    }
`;

export const Heading3 = styled.h3<HeadingProps>`
    color: ${(props) => theme.colors[props.color]};
    text-align: ${(props) => props.alignment};
    font-size: ${theme.fontSize.smallBody.size};
    line-height: ${theme.fontSize.smallBody.lineHeight};
    letter-spacing: ${theme.fontSize.smallBody.charSpace};

    @media (min-width: 500px) {
        font-size: ${theme.fontSize.medium.size};
        line-height: ${theme.fontSize.medium.lineHeight};
        letter-spacing: ${theme.fontSize.medium.charSpace};
    }
`;
