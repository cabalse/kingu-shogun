// Following this tutorial: https://phaser.io/tutorials/retro-highscore-table

import settings from "../../constants/settings";
import textStyle from "../../styles/text-style";
import centerOnScreen from "../../utilities/center-on-screen";
import text from "../../utilities/text";

class GameOver extends Phaser.Scene {
  constructor() {
    super({ key: "gameOver" });

    this.playerText;
  }

  preload() {
    this.load.image("block", "assets/block.png");
    this.load.image("rub", "assets/rub.png");
    this.load.image("end", "assets/end.png");
  }

  create() {
    // this.add
    //   .bitmapText(175, 70, "glitchy", settings.TITLE)
    //   .setScale(1.4)
    //   .setTint(0xff0000);
    text(175, 70, settings.TITLE);

    this.add
      .bitmapText(100, 170, "font", "RANK  SCORE   NAME")
      .setTint(0xff00ff);
    this.add.bitmapText(100, 230, "font", "1ST   50000").setTint(0xff0000);

    this.playerText = this.add
      .bitmapText(580, 230, "font", "")
      .setTint(0xff0000);

    //  Do this, otherwise this Scene will steal all keyboard input
    this.input.keyboard.enabled = false;

    this.scene.launch("InputPanel");
    let panel = this.scene.get("InputPanel");

    // //  Listen to events from the Input Panel scene
    panel.events.on("updateName", this.updateName, this);
    panel.events.on("submitName", this.submitName, this);
  }

  submitName() {
    this.scene.stop("InputPanel");

    this.add
      .bitmapText(100, 360, "arcade", "2ND   40000    ANT")
      .setTint(0xff8200);
    this.add
      .bitmapText(100, 410, "arcade", "3RD   30000    .-.")
      .setTint(0xffff00);
    this.add
      .bitmapText(100, 460, "arcade", "4TH   20000    BOB")
      .setTint(0x00ff00);
    this.add
      .bitmapText(100, 510, "arcade", "5TH   10000    ZIK")
      .setTint(0x00bfff);
  }

  updateName(name) {
    this.playerText.setText(name);
  }
}

export default GameOver;
