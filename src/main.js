import Phaser from "phaser";

import initScene from "./components/scenes/init";
import levelOne from "./components/scenes/level-one";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [levelOne, initScene],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
};

const game = new Phaser.Game(config);
