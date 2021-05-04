export type ColorsType = "orange" | "paleOrange" | "black" | "white" | "grey";
export type FontSizeType = 'extraLarge' | 'large' | 'medium' | 'small' | 'largeBody' | 'smallBody';

export const theme = {
  colors: {
    orange: "#D87D4A",
    paleOrange: "#FBAF85",
    black: "#101010",
    white: "#FFFFFF",
    grey: "#F1F1F1",
  },
  fontSize: {
    extraLarge: {
      size: "56px",
      lineHeight: "56px",
      charSpace: "2px",
    },
    large: {
      size: "40px",
      lineHeight: "44px",
      charSpace: "1.5px",
    },
    medium: {
      size: "32px",
      lineHeight: "36px",
      charSpace: "1.15px",
    },
    small: {
      size: "24px",
      lineHeight: "33px",
      charSpace: "1.7px",
    },
    largeBody: {
      size: "18px",
      lineHeight: "24px",
      charSpace: "1.3px",
    },
    smallBody: {
      size: "14px",
      lineHeight: "18px",
      charSpace: "1px",
    },
  },
};
