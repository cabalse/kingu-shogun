import Phaser from "phaser";

import settings from "./settings";
import Splash from "./components/scenes/splash";

const config = {
  type: Phaser.AUTO,
  width: settings.SCREEN_WIDTH,
  height: settings.SCREEN_HEIGHT,
  scene: Splash,
  audio: {
    disableWebAudio: true,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: settings.GRAVITY },
    },
  },
};

const game = new Phaser.Game(config);
