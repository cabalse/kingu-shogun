import centerOnScreen from "../../utilities/center-on-screen";

class Splash extends Phaser.Scene {
  constructor() {
    super({ key: "splash" });
  }

  preload() {
    this.load.image("splash-screen", "assets/splash-screen.png");
  }

  create() {
    this.add.image(centerOnScreen.x, centerOnScreen.y, "splash-screen");

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
