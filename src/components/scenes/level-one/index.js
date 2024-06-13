function preload() {
  this.load.setBaseURL("https://labs.phaser.io");

  this.load.image("sky", "assets/skies/space3.png");
  this.load.image("logo", "assets/sprites/phaser3-logo.png");
  this.load.image("red", "assets/particles/red.png");
}

function create() {
  this.add.image(400, 300, "sky");

  const logo = this.physics.add.image(400, 100, "logo");

  logo.setVelocity(100, 200);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);

  particles.startFollow(logo);
}

const levelOne = {
  preload: preload,
  create: create,
};

export default levelOne;
