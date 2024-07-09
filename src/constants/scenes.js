const scenes = Object.freeze({
  SPLASH: "splash", // The splash screen that appears when the game is first loaded.
  INTRO: "intro", // The intro screen that appears after the splash screen.
  MENU: "menu", // Menu scene used with the Intro scene to select Start, HighScores, or Quite.
  GAME: "game", // The main game scene where the player interacts with the game.
  GAME_OVER: "game-over", // The scene that appears when the game is over.
});

/*
 ** Scene Flow:
 ** Splash -> Intro -> Game -> GameOver
 */

export default scenes;
