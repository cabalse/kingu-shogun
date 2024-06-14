import Phaser from "phaser";

import { GRAVITY, SCREEN_HEIGHT, SCREEN_WIDTH } from "./settings";
import splash from "./components/scenes/splash";

const config = {
  type: Phaser.AUTO,
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  scene: [splash], // [gameOver, game, menu, splash]
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: GRAVITY },
    },
  },
};

const game = new Phaser.Game(config);
