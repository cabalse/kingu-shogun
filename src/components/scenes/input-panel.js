class InputPanel extends Phaser.Scene {
  constructor() {
    super({ key: "InputPanel", active: false });

    this.chars = [
      ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
      ["K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"],
      ["U", "V", "W", "X", "Y", "Z", ".", "-", "<", ">"],
    ];

    this.cursor = new Phaser.Math.Vector2();

    this.text;
    this.block;

    this.name = "";
    this.charLimit = 3;
  }

  create() {
    let text = this.add
      .bitmapText(130, 50, "font", "ABCDEFGHIJ\n\nKLMNOPQRST\n\nUVWXYZ.-")
      .setScale(0.5);

    text.setLetterSpacing(20);
    text.setInteractive();

    this.add.image(text.x + 430, text.y + 148, "rub");
    this.add.image(text.x + 482, text.y + 148, "end");

    this.block = this.add.image(text.x - 10, text.y - 2, "block").setOrigin(0);

    this.text = text;

    text.on("pointermove", this.moveBlock, this);
    text.on("pointerup", this.pressKey, this);

    this.input.keyboard.on("keyup-LEFT", () => console.log("LEFT"), this);
    this.input.keyboard.on("keyup-RIGHT", this.moveRight, this);
    // this.input.keyboard.on("keyup_UP", this.moveUp, this);
    // this.input.keyboard.on("keyup_DOWN", this.moveDown, this);
    // this.input.keyboard.on("keyup_ENTER", this.pressKey, this);
    // this.input.keyboard.on("keyup_SPACE", this.pressKey, this);
  }

  moveLeft() {
    console.log("moveLeft");
    if (this.cursor.x > 0) {
      this.cursor.x--;
      this.block.x -= 52;
    } else {
      this.cursor.x = 9;
      this.block.x += 52 * 9;
    }
  }

  moveRight() {
    console.log("moveRight");
    if (this.cursor.x > 0) {
      this.cursor.x++;
      this.block.x += 52;
    } else {
      this.cursor.x = 9;
      this.block.x -= 52 * 9;
    }
  }

  moveBlock(pointer, x, y) {
    let cx = Phaser.Math.Snap.Floor(x, 52, 0, true);
    let cy = Phaser.Math.Snap.Floor(y, 64, 0, true);
    let char = this.chars[cy][cx];

    this.cursor.set(cx, cy);

    this.block.x = this.text.x - 10 + cx * 52;
    this.block.y = this.text.y - 2 + cy * 64;
  }

  pressKey() {
    let x = this.cursor.x;
    let y = this.cursor.y;
    let nameLength = this.name.length;

    this.block.x = this.text.x - 10 + x * 52;
    this.block.y = this.text.y - 2 + y * 64;

    if (x === 9 && y === 2 && nameLength > 0) {
      //  Submit
      this.events.emit("submitName", this.name);
    } else if (x === 8 && y === 2 && nameLength > 0) {
      //  Rub
      this.name = this.name.substr(0, nameLength - 1);

      this.events.emit("updateName", this.name);
    } else if (this.name.length < this.charLimit) {
      //  Add
      this.name = this.name.concat(this.chars[y][x]);

      this.events.emit("updateName", this.name);
    }
  }
}

export default InputPanel;
