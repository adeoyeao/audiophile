import styled from "styled-components";
import { theme, ColorsType } from "../Shared/theme";

type ButtonProps = {
  primary?: Boolean;
};

export const Button = styled.button<ButtonProps>`
  width: 10rem;
  height: 3rem;
  text-transform: uppercase;
  transition: background 0.75s linear, color 0.75s linear;
  border: none;
  outline: none;
  appearance: none;
  cursor: pointer;
  
  ${(props) =>
    props.primary
      ? `
        background: ${theme.colors.orange};
        color: white;
        font-size: ${theme.fontSize.smallBody};
        &:hover {
            background: ${theme.colors.paleOrange}
        }
    `
      : `
        background: transparent;
        border: 2px solid ${theme.colors.black};
        color: ${theme.colors.black};
        font-size: ${theme.fontSize.smallBody};
        &:hover {
            background: ${theme.colors.black};
            color: ${theme.colors.white};
        }
    `}
`;
