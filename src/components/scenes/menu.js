import colors from "../../constants/colors";
import events from "../../constants/events";
import fonts from "../../constants/fonts";
import texts from "../../constants/texts";
import moveLine from "../../utilities/move-line";
import text from "../../utilities/text";

class Menu extends Phaser.Scene {
  lines = [{}, {}];
  menuPosition = 0;
  menuMarkerCoords = [
    {
      line1: [150, 190, 650, 190],
      line2: [150, 250, 650, 250],
    },
    {
      line1: [150, 250, 650, 250],
      line2: [150, 310, 650, 310],
    },
    {
      line1: [150, 310, 650, 310],
      line2: [150, 370, 650, 370],
    },
  ];
  menuItems = [texts.START, texts.HIGHSCORE, texts.QUITE];
  graphics;

  constructor() {
    super({ key: "menu" });
  }

  preload() {
    this.load.bitmapFont(
      "glitchy",
      "assets/fonts/glitchy-64-font.png",
      "assets/fonts/glitchy-64-font.xml"
    );
  }

  create() {
    text(this, 350, 200, this.menuItems[0], fonts.BUTTON);
    text(this, 310, 260, this.menuItems[1], fonts.BUTTON);
    text(this, 360, 320, this.menuItems[2], fonts.BUTTON);

    this.graphics = this.add.graphics({
      lineStyle: { width: 3, color: colors.PRIMARY },
    });

    // Lines
    this.lines[0] = new Phaser.Geom.Line(
      ...this.menuMarkerCoords[this.menuPosition].line1
    );
    this.lines[1] = new Phaser.Geom.Line(
      ...this.menuMarkerCoords[this.menuPosition].line2
    );

    this.input.keyboard.on("keyup-UP", this.moveSelectedMenuUp, this);
    this.input.keyboard.on("keyup-DOWN", this.moveSelectedMenuDown, this);
    this.input.keyboard.on("keyup-ENTER", () => {
      this.events.emit(events.MENU_SELECT, this.menuItems[this.menuPosition]);
    });
  }

  update() {
    this.graphics.clear();
    this.drawMenuSelectMarker();
  }

  moveSelectedMenuUp() {
    this.menuPosition -= 1;
    this.menuPosition = Math.max(0, this.menuPosition);
    this.setMenuSelectMarker();
  }

  moveSelectedMenuDown() {
    this.menuPosition += 1;
    this.menuPosition = Math.min(2, this.menuPosition);
    this.setMenuSelectMarker();
  }

  setMenuSelectMarker() {
    moveLine(this.lines[0], ...this.menuMarkerCoords[this.menuPosition].line1);
    moveLine(this.lines[1], ...this.menuMarkerCoords[this.menuPosition].line2);
  }

  drawMenuSelectMarker() {
    this.graphics.strokeLineShape(this.lines[0]);
    this.graphics.strokeLineShape(this.lines[1]);
  }
}

export default Menu;
