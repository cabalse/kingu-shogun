import centerOnScreen from "../../../utilities/center-on-screen";

function preload() {
  this.load.image("splash-screen", "assets/splash-screen.png");
}

function create() {
  this.add.image(centerOnScreen.x, centerOnScreen.y, "splash-screen");
}

const splash = {
  preload: preload,
  create: create,
};

export default splash;
