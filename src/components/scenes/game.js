import settings from "../../constants/settings";

const levelSettings = Object.freeze({
  SAMURAI_SPAWN_POINT: [
    { x: 360, y: 180, level: 3 },
    { x: 440, y: 180, level: 3 },
  ],
});

class Game extends Phaser.Scene {
  platforms;
  climbs;
  player = { sprite: null, level: 0, couldClimb: false };
  cursors;
  shogun;
  samurais = [];

  roofs = [
    {
      level: 3,
      y: 244,
      xs: [368, 400, 432],
    },
    {
      level: 2,
      y: 352,
      xs: [304, 336, 368, 400, 432, 464, 496],
    },
    {
      level: 1,
      y: 460,
      xs: [
        144, 176, 208, 240, 272, 304, 336, 368, 400, 432, 464, 496, 528, 560,
        592, 624, 656,
      ],
    },
  ];

  chains = [
    { x: 400, ys: [259, 291, 323] },
    { x: 300, ys: [367, 399, 431] },
    { x: 500, ys: [367, 399, 431] },
    { x: 150, ys: [475, 507, 539] },
    { x: 650, ys: [475, 507, 539] },
  ];

  constructor() {
    super({ key: "game" });
  }

  preload() {
    this.load.image("sky", "assets/images/sky.png");
    this.load.image("ground", "assets/images/ground.png");
    this.load.image("roof", "assets/images/roof.png");
    this.load.image("chain", "assets/images/chain.png");
    this.load.image("ninja", "assets/images/ninja.png");
    this.load.image("samurai", "assets/images/samurai.png");
    this.load.image("shogun", "assets/images/shogun.png");
  }

  create() {
    this.add.image(0, 0, "sky").setOrigin(0, 0);

    // Create group for all platform elements
    this.platforms = this.physics.add.staticGroup();

    this.platforms
      .create(0, settings.SCREEN_HEIGHT - settings.PIXEL_HEIGHT, "ground")
      .setOrigin(0, 0)
      .refreshBody();
    this.roofs.forEach((roof) => this.createRoof(this.platforms, roof));

    // Create group for all climbable elements
    this.climbs = this.physics.add.staticGroup();
    this.chains.forEach((chain) => this.createChains(this.climbs, chain));

    // Spawn the Shogun
    this.shogun = this.physics.add.sprite(400, 180, "shogun");
    this.shogun.setCollideWorldBounds(true);
    this.physics.add.collider(this.shogun, this.platforms);

    // Spawn initial enemies
    this.spawnSamurai(0, this.samurais);
    this.spawnSamurai(1, this.samurais);

    this.spawnPlayer();

    // Set up controls
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    const playerSprite = this.player.sprite;

    // Player movement
    if (this.cursors.left.isDown) {
      playerSprite.setVelocityX(-160);
    } else if (this.cursors.right.isDown) {
      playerSprite.setVelocityX(160);
    } else {
      playerSprite.setVelocityX(0);
    }
    if (this.player.couldClimb) {
      if (this.cursors.up.isDown) {
        playerSprite.setVelocityY(-160);
      } else {
        playerSprite.setVelocityY(0);
      }
    } else {
      if (this.cursors.up.isDown && playerSprite.body.touching.down) {
        playerSprite.setVelocityY(-300);
      }
    }
  }

  createRoof(group, roof) {
    roof.xs.forEach((x) => {
      group.create(x, roof.y, "roof");
    });
  }

  createChains(group, chain) {
    chain.ys.forEach((y) => group.create(chain.x, y, "chain"));
  }

  spawnPlayer() {
    this.player.sprite = this.physics.add.sprite(400, 550, "ninja");
    this.player.sprite.setBounce(0.2);
    this.player.sprite.body.setGravityY(300);
    this.player.sprite.body.onOverlap = true;
    this.player.sprite.setCollideWorldBounds(true);

    this.physics.add.collider(this.player.sprite, this.platforms);
    this.physics.add.overlap(this.player.sprite, this.climbs, () => {
      this.player.couldClimb = true;
    });
  }

  spawnSamurai(spawnPoint, list) {
    const samurai = this.physics.add.sprite(
      levelSettings.SAMURAI_SPAWN_POINT[spawnPoint].x,
      levelSettings.SAMURAI_SPAWN_POINT[spawnPoint].y,
      "samurai"
    );
    samurai.setCollideWorldBounds(true);
    this.physics.add.collider(samurai, this.platforms);
    list.push({
      sprite: samurai,
      level: levelSettings.SAMURAI_SPAWN_POINT[spawnPoint].level,
    });
  }
}

export default Game;
