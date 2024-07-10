import Phaser from "phaser";

import settings from "./constants/settings";
import Splash from "./components/scenes/splash";
import Menu from "./components/scenes/menu";
import Intro from "./components/scenes/intro";
import GameOver from "./components/scenes/game-over";
import Game from "./components/scenes/game";

const config = {
  type: Phaser.AUTO,
  width: settings.SCREEN_WIDTH,
  height: settings.SCREEN_HEIGHT,
  scene: [Game, Splash, Intro, Menu, GameOver],
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
