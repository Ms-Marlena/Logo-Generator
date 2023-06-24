const {Shape, Circle, Square, Triangle}=require("./shapes")

// shape.setColor("blue");
// expect(shape.render()).toEqual(
//   '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
// );


test("testing setting a color", () => {
  const shape = new Triangle("SVG", "green");
  shape.setColor("blue");
  expect(shape.shapeColor).toBe("blue");
});