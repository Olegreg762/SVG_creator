// Imports of required modules/packages
const inquirer = require("inquirer");
const fs = require("fs");
const generate_svg = require("./lib/shapes")
// Function for validating input is not blank
function validate_input(input){
    if(input == ""){
        return console.log("Cannot be Blank")
    }
    return true
};
// Function to validate input is 3 chacters long
function validate_input_length(input){
    if(input.length != 3){
        return console.log(" Must be 3 Characters Long")
    }
    return true
};
// SVG parameters that will be set by command line
const parameters =[
    {
        type: "list",
        name: "shape",
        message: "What Shape Would You Like?",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "color",
        message: "What Color Should The SVG Be? If Using Hex Color Include #",
        validate: validate_input
    },
    {
        type: "input",
        name: "font",
        message: "What would you like the Font Color to be? If Using Hex Color Include #",
        validate: validate_input
    },
    {
        type: "input",
        name: "logo",
        message: "Please Enter the 3 Letter Logo",
        validate: validate_input_length
    }
];
// Function to write the SVG File
function write_svg(file_name, data){
    fs.writeFile(`./example/${file_name}`, data, (err) =>{
       err ? console.log(err) : console.log("Generated logo.svg")
    })
}
// Function to ask questions to build parameters
function questions(){
    inquirer.prompt(parameters).then(data => {
        console.log(data);
        write_svg(`${data.shape}_logo.svg`,generate_svg(data))
    })
}
// Calls questions function to run program
questions()