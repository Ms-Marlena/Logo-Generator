const {Shape, Circle, Square, Triangle}=require("./shapes")


test("testing setting shape as Triangle",
  () => {
    const shape = new Triangle();
    expect(shape.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />

  <text x="150" y="155" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`);
  });

test("testing setting shape as Square",
  () => {
    const shape = new Square();
    expect(shape.render())
      .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect width="150" height="150" fill="${this.shapeColor}" />

  <text x="75" y="85" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`);
  });

test("testing setting shape as Circle",
  () => {
    const shape = new Circle();
    expect(shape.render())
      .toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

  <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

</svg>`);
  });

test("testing setting a shape color", () => {
  const shape = new Triangle("SVG", "green");
  shape.setColor("blue");
  expect(shape.shapeColor).toBe("blue");
});

test("testing setting a shape color", () => {
  const shape = new Square("SVG", "green");
  shape.setColor("blue");
  expect(shape.shapeColor).toBe("blue");
});

test("testing setting a shape color", () => {
  const shape = new Circle("SVG", "green");
  shape.setColor("blue");
  expect(shape.shapeColor).toBe("blue");
});



// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });