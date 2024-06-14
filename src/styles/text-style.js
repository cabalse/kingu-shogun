import settings from "../settings";

const textStyle = {
  gameTitle: (text) => {
    text.setStyle({
      backgroundColor: settings.BACKGROUND_COLOR,
      color: "orange",
      fontFamily: "serif",
      fontSize: "60px",
      fontStyle: "bold italic",
      stroke: "orange",
      "shadow.offsetX": 5,
      "shadow.offsetY": 5,
      "shadow.color": "brown",
      "shadow.blur": 7,
      "shadow.stroke": true,
      "shadow.fill": true,
    });
  },
};

export default textStyle;
