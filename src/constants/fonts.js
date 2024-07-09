import colors from "./colors";

const fontSizes = Object.freeze({
  LARGE: 1.4,
  MEDIUM: 1.0,
  SMALL: 0.8,
});

const fonts = Object.freeze({
  MAIN: {
    name: "glitchy",
    size: fontSizes.LARGE,
    color: colors.PRIMARY,
  },
  BUTTON: {
    name: "bitpap",
    size: fontSizes.SMALL,
    color: colors.PRIMARY,
  },
});

export default fonts;
