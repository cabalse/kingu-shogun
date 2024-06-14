import settings from "../../../settings";
import textStyle from "../../../styles/text-style";
import centerOnScreen from "../../../utilities/center-on-screen";

function preload() {}

function create() {
  const titleText = this.add.text(centerOnScreen.x, 100, "").setOrigin(0.5);
  titleText.text = settings.TITLE;
  textStyle.gameTitle(titleText);

  // titleText.setPadding({ left: 10, top: 10, right: 10, bottom: 10 });
}

const menu = {
  preload: preload,
  create: create,
};

export default menu;
