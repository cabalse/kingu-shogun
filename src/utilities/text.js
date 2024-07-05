const text = (t, x, y, text, font) => {
  t.add
    .bitmapText(x, y, font.name, text)
    .setScale(font.size)
    .setTint(font.color);
};

export default text;
