const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
    run() {
        return inquirer
            .prompt([
             {
                name: "text",
                type: "input",
                message: "Enter text for the logo (Must not exceed 3 characters)",
                validate: (text) =>
                text.length <= 3 ||
                "Text must not exceed 3 characters"
             },
             {
                name: "textColor",
                type: "input",
                message: "Enter a text color",
             },
             {
                name: "shapeType",
                type: "list",
                message: "Please select a shape",
                choices: ["Circle", "Square", "Triangle"],
             },
             {
                name: "shapeColor",
                type: "input",
                message: "Enter a shape color",
             },
            ])
            .then(({ text, textColor, shapeType, shapeColor }) => {
                let shape;
                switch (shapeType) {
                    case "Circle":
                        shape = new Circle();
                        break;
                        
                    case "Square":
                        shape = new Square();
                        break;
                            
                    default:
                        shape = new Triangle();
                        break;
                }
                shape.setColor(shapeColor);
                
                const svg = new SVG();
                svg.setText(text, textColor);
                svg.setShape(shape);
                return writeFile("logo.svg", svg.render());
            })
            .then(() => {
                console.log("Generated logo.svg successfully");
            })
            .catch((error) => {
                console.log(error);
                console.log("Something went wrong! Please try again.");
            });
    }
}

module.exports = CLI;