const fontSizes = Object.freeze({
  LARGE: 1.4,
  MEDIUM: 1.0,
  SMALL: 0.8,
});

const fontColors = Object.freeze({
  PRIMARY: 0xff0000,
  SECONDARY: 0x00ff00,
});

const fonts = Object.freeze({
  MAIN: {
    name: "glitchy",
    size: fontSizes.LARGE,
    color: fontColors.PRIMARY,
  },
  BUTTON: {
    name: "bitpap",
    size: fontSizes.SMALL,
    color: fontColors.PRIMARY,
  },
});

export default fonts;
