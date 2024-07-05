import Phaser from "phaser";

import settings from "./constants/settings";
import Splash from "./components/scenes/splash";
import Menu from "./components/scenes/menu";

const config = {
  type: Phaser.AUTO,
  width: settings.SCREEN_WIDTH,
  height: settings.SCREEN_HEIGHT,
  scene: [Splash, Menu],
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
