const inquirer = require("inquirer");
const fs = require("fs");
const generate_svg = require("./lib/shapes")

function validate_input(input){
    if(input == ""){
        return console.log("Cannot be Blank")
    }
    return true
};
function validate_input_length(input){
    if(input.length != 3){
        return console.log(" Must be 3 Characters Long")
    }
    return true
};

const parameters =[
    {
        type: "input",
        name: "name",
        message: "What is The Name of Your Logo?",
        validate: validate_input
    },
    {
        type: "list",
        name: "shape",
        message: "What Shape Would You Like?",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "color",
        message: "What Color Should The SVG Be?",
        validate: validate_input
    },
    {
        type: "input",
        name: "font",
        message: "What would you like the Font Color to be?",
        validate: validate_input
    },
    {
        type: "input",
        name: "logo",
        message: "Please Enter the 3 Letter Logo",
        validate: validate_input_length
    }
];

function write_svg(file_name, data){
    fs.writeFile(`./example/${file_name}`, data, (err) =>{
       err ? console.log(err) : console.log("Generated logo.svg")
    })
}

function init(){
    inquirer.prompt(parameters).then(data => {
        console.log(data);
        write_svg(`${data.name}.svg`,generate_svg(data))
    })
}
init()