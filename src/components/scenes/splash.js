import fonts from "../../constants/fonts";
import scenes from "../../constants/scenes";
import s from "../../constants/settings";
import texts from "../../constants/texts";
import centerOnScreen from "../../utilities/center-on-screen";
import text from "../../utilities/text";

class Splash extends Phaser.Scene {
  constructor() {
    super({ key: "splash" });

    // var intro;
  }

  preload() {
    this.load.image("splash-screen", "assets/images/splash.jpg");

    this.load.bitmapFont(
      "glitchy",
      "assets/fonts/glitchy-64-font.png",
      "assets/fonts/glitchy-64-font.xml"
    );

    this.load.bitmapFont(
      "bitpap",
      "assets/fonts/bitpap-64-font.png",
      "assets/fonts/bitpap-64-font.xml"
    );

    // this.load.audio("intro_music", ["assets/music/intro.mp3"]);
  }

  create() {
    this.sound.pauseOnBlur = false;

    this.add
      .image(centerOnScreen.x, centerOnScreen.y, "splash-screen")
      .setScale(0.61);

    text(this, 180, 30, texts.TITLE, fonts.MAIN);

    // this.intro = this.sound.add("intro_music", { loop: true });

    this.enableInput();
  }

  enableInput() {
    text(this, 300, 500, texts.PRESS_KEY, fonts.BUTTON);

    this.input.once(
      "pointerdown",
      function (event) {
        this.scene.start(scenes.INTRO);
      },
      this
    );

    this.input.keyboard.on(
      "keydown",
      () => {
        this.scene.start(scenes.INTRO);
      },
      this
    );
  }
}

export default Splash;
