import events from "../../constants/events";
import fonts from "../../constants/fonts";
import scenes from "../../constants/scenes";
import texts from "../../constants/texts";
import text from "../../utilities/text";

class Intro extends Phaser.Scene {
  constructor() {
    super({ key: "intro" });
  }

  preload() {
    this.load.bitmapFont(
      "glitchy",
      "assets/fonts/glitchy-64-font.png",
      "assets/fonts/glitchy-64-font.xml"
    );
  }

  create() {
    text(this, 180, 30, texts.TITLE, fonts.MAIN);
    this.input.keyboard.enabled = false;

    this.scene.launch(scenes.MENU);
    let menu = this.scene.get(scenes.MENU);

    menu.events.on(events.MENU_SELECT, this.menuSelected, this);
  }

  update() {}

  menuSelected(menuItem) {
    this.scene.stop(scenes.MENU);
    switch (menuItem) {
      case texts.START:
        this.scene.start(scenes.GAME);
        break;
      case texts.HIGHSCORE:
        this.scene.launch(scenes.HIGHSCORE);
        break;
      case texts.QUITE:
        this.scene.stop(scenes.INTRO);
        break;
    }
  }
}

export default Intro;
