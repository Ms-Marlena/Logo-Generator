class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  setColor(color) {
    this.shapeColor = color;
  }
}

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor); // call the super class constructor and pass in the name parameter
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

  <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`;
  }
}
class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor); // call the super class constructor and pass in the name parameter
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect width="150" height="150" fill="${this.shapeColor}" />

  <text x="75" y="85" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`;
  }
}
class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor); // call the super class constructor and pass in the name parameter
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />

  <text x="150" y="155" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`;
  }
}

module.exports = { Shape, Circle, Square, Triangle };
