import settings from "../../constants/settings";

class Game extends Phaser.Scene {
  platforms;
  climbs;

  roofs = [
    {
      level: 3,
      y: 300,
      xs: [368, 400, 432],
    },
    {
      level: 2,
      y: 400,
      xs: [304, 336, 368, 400, 432, 464, 496],
    },
    {
      level: 1,
      y: 500,
      xs: [
        144, 176, 208, 240, 272, 304, 336, 368, 400, 432, 464, 496, 528, 560,
        592, 624, 656,
      ],
    },
  ];

  chains = [
    { x: 400, ys: [300, 332, 364] },
    { x: 300, ys: [400, 432, 464] },
    { x: 500, ys: [400, 432, 464] },
    { x: 150, ys: [500, 532] },
    { x: 650, ys: [500, 532] },
  ];

  constructor() {
    super({ key: "game" });
  }

  preload() {
    this.load.image("sky", "assets/images/sky.png");
    this.load.image("ground", "assets/images/ground.png");
    this.load.image("roof", "assets/images/roof.png");
    this.load.image("chain", "assets/images/chain.png");
  }

  create() {
    this.add.image(0, 0, "sky").setOrigin(0, 0);

    this.platforms = this.physics.add.staticGroup();

    this.platforms
      .create(0, settings.SCREEN_HEIGHT - settings.PIXEL_HEIGHT, "ground")
      .setOrigin(0, 0)
      .refreshBody();
    this.roofs.forEach((roof) => this.createRoof(this.platforms, roof));

    this.climbs = this.physics.add.staticGroup();
    this.chains.forEach((chain) => this.createChains(this.climbs, chain));
  }

  createRoof(group, roof) {
    roof.xs.forEach((x) => {
      group.create(x, roof.y, "roof");
    });
  }

  createChains(group, chain) {
    chain.ys.forEach((y) => group.create(chain.x, y, "chain"));
  }
}

export default Game;
