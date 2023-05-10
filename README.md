## Command-Line Logo Generator
This command-line application allows you to generate a custom logo in SVG format based on your inputs. The generated logo will match the criteria you provide, including text, text color, shape, and shape color.

## Installation
To use this application, you need to have the following prerequisites:

Node.js (version 12 or higher)
Once you have Node.js installed, follow these steps to set up the application:

1. Clone the repository or download the source code.
2. Open a terminal and navigate to the project directory.
3. Run the command npm install to install the required dependencies.

## Usage Video
Here is the URL to the demo video: https://drive.google.com/file/d/1Mmo-DHIqQFJkimNXDfvS3DMkk9o4KFhc/view
## Usage
To generate a logo, follow these steps:

1. Open a terminal and navigate to the project directory.
2. Run the command node index.js to start the application.
3. You will be prompted to enter text for the logo. You can enter up to three characters.
4. Next, you will be prompted to enter the text color. You can enter a color keyword (e.g., 5. "red", "blue") or a hexadecimal number (e.g., "#FF0000").
5. After that, you will be presented with a list of shapes to choose from: circle, triangle, and square. Enter the corresponding number to select a shape.
6. Finally, you will be prompted to enter the shape's color. Like before, you can enter a color keyword or a hexadecimal number.
7. Once you have entered all the inputs, an SVG file named logo.svg will be created in the project directory.
8. The output message "Generated logo.svg" will be printed in the command line.
## Viewing the Logo
To view the generated logo, follow these steps:

1. Open a web browser.
2. Navigate to the project directory.
3. Open the logo.svg
4. The logo should appear as a 300x200 pixel image that matches the criteria you entered.
## Customization
If you want to customize the application further, you can modify the following files:

    index.js: This is the main file that handles user input and generates the SVG file.
    template.js: This file contains the SVG template for the logo. You can modify it to change the layout or styling of the logo.
## Troubleshooting
If you encounter any issues while using the application, try the following steps:

    Make sure you have entered valid inputs for text, color, shape, and shape color.
    Check that you have the necessary permissions to create files in the project directory.
    Ensure that your web browser supports SVG images.
    If you encounter any errors or bugs, please report them by opening an issue in the GitHub repository.
## License
This application is released under the MIT License. Feel free to use it for personal or commercial projects.