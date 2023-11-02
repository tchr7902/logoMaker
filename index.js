const inquirer = require('inquirer')
const fs = require('fs')
const generateLogo = require('./lib/shapes.js')

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 letters to be on your logo:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color or hexadecimal number for the color of the text:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo:',
        choices: [
            { name: 'Circle', value: 'circle' },
            { name: 'Triangle', value: 'triangle' },
            { name: 'Square', value: 'square' },
        ]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color or hexadecimal number for the color of the shape:'
    },
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log(`Generated logo.svg!`)
        }
    })
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const svgContent = generateLogo(answers);
        writeToFile('logo.svg', svgContent)
    })
}

init();