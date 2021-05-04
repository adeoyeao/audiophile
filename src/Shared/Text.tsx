import styled from "styled-components";
import { theme, ColorsType } from "../Shared/theme";

type TextProps = {
  fontSize: 'largeBody' | 'smallBody';
  alignment: "left" | "center" | "right";
  color: ColorsType;
};

export const Text = styled.p<TextProps>`
  font-size: ${(props) => theme.fontSize[props.fontSize]};
  color: ${(props) => theme.colors[props.color]};
  text-align: ${(props) => props.alignment};
`;
