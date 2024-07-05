import fonts from "../../constants/fonts";
import texts from "../../constants/texts";
import text from "../../utilities/text";

class Menu extends Phaser.Scene {
  constructor() {
    super({ key: "menu" });
  }

  preload() {
    this.load.bitmapFont(
      "glitchy",
      "assets/fonts/glitchy-64-font.png",
      "assets/fonts/glitchy-64-font.xml"
    );
  }

  create() {
    text(this, 175, 30, texts.TITLE, fonts.MAIN);
    text(this, 330, 200, texts.START, fonts.BUTTON);
  }
}

export default Menu;
