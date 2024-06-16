import settings from "../../settings";
import centerOnScreen from "../../utilities/center-on-screen";

class Splash extends Phaser.Scene {
  constructor() {
    super({ key: "splash" });

    var intro;
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

    this.load.audio("intro_music", ["assets/music/intro.mp3"]);
  }

  create() {
    this.sound.pauseOnBlur = false;

    this.add
      .image(centerOnScreen.x, centerOnScreen.y, "splash-screen")
      .setScale(0.6);

    this.add
      .bitmapText(175, 30, "glitchy", settings.TITLE)
      .setScale(1.4)
      .setTint(0xff0000);

    this.intro = this.sound.add("intro_music", { loop: true });

    this.enableInput();
  }

  enableInput() {
    this.add.bitmapText(300, 500, "bitpap", "PRESS KEY").setTint(0xff0000);

    this.input.once(
      "pointerdown",
      function (event) {
        this.scene.start("menu");
      },
      this
    );

    this.input.keyboard.on(
      "keydown",
      () => {
        this.scene.start("menu");
      },
      this
    );
  }
}

export default Splash;
