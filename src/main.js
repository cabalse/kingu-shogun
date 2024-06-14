import Phaser from "phaser";

import settings from "./settings";

import splash from "./components/scenes/splash";
import menu from "./components/scenes/menu";

const config = {
  type: Phaser.AUTO,
  width: settings.SCREEN_WIDTH,
  height: settings.SCREEN_HEIGHT,
  scene: [menu, splash], // [gameOver, game, menu, splash]
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: settings.GRAVITY },
    },
  },
};

const game = new Phaser.Game(config);
