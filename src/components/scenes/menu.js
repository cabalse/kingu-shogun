import settings from "../../settings";
import textStyle from "../../styles/text-style";
import centerOnScreen from "../../utilities/center-on-screen";

class Menu extends Phaser.Scene {
  constructor() {
    super({ key: "menu" });
  }

  preload() {}

  create() {
    // const titleText = this.add.text(centerOnScreen.x, 100, "").setOrigin(0.5);
    // titleText.text = settings.TITLE;
    // textStyle.gameTitle(titleText);
  }
}

export default Menu;
