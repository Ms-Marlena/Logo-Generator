const inquirer = require("inquirer");
const fs = require("fs");

const { Circle, Square, Triangle } = require("./lib/shapes");
const questions = [
  {
    type: "list",
    message: "Please choose a shape for your logo:",
    choices: ["Circle", "Triangle", "Square"],
    name: "shape",
  },
  {
    type: "input",
    message: "Please select up to three letters for your logo:",
    name: "letters",
    validate: (letters) => {
      if (letters.length > 3 || letters.length <= 0) {
        return "Please choose 1 - 3 letters.";
      }
      return true;
    },
  },
  {
    type: "input",
    message: "Enter a color for your shape:",
    name: "shapeColor",
  },
  {
    type: "input",
    message: "Enter a color for your text:",
    name: "textColor",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(answers);
  let svg;
  if (answers.shape === "Circle") {
    svg = new Circle(answers.letters, answers.textColor, answers.shapeColor);
  } else if (answers.shape === "Square") {
    svg = new Square(answers.letters, answers.textColor, answers.shapeColor);
    } else { svg = new Triangle(answers.letters, answers.textColor, answers.shapeColor); }
    fs.writeFile(`./examples/${answers.shape}.svg`, svg.render(), (err) => {
        if (err) throw err;
        console.log("Success!");
  })  

});
