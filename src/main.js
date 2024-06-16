import Phaser from "phaser";

import settings from "./settings";

import Splash from "./components/scenes/splash";
import Menu from "./components/scenes/menu";
import Game from "./components/scenes/game";
import GameOver from "./components/scenes/game-over";
import InputPanel from "./components/scenes/input-panel";

const config = {
  type: Phaser.AUTO,
  width: settings.SCREEN_WIDTH,
  height: settings.SCREEN_HEIGHT,
  scene: [GameOver, Splash, Menu, Game, InputPanel],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: settings.GRAVITY },
    },
  },
};

const game = new Phaser.Game(config);
