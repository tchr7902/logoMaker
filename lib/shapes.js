let text = '';
let shape = '';

function generateText(data) {
    if(data.text.length > 3) {
        alert("Error: Text length should be less than 3 characters or less.")
      } else { 
    text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>`
    }
}

function generateShape(data) {
    if(data.shape == 'circle') {
        shape = `<circle cx="150" cy="100" r="80" stroke="black" fill="${data.shapeColor}" stroke-width="1"/>`
    } else if(data.shape == 'square') {
        shape = `<rect x="75" y="30" width="150" height="150" stroke="black" fill="${data.shapeColor}" stroke-width="1"/>`
    } else if(data.shape == 'triangle') {
        shape = `<polygon points="150,10 250,160 50,160" stroke="black" fill="${data.shapeColor}" stroke-width="1"/>`;
    } else {
        console.log("Not working")
    }
}

function generateLogo(data) {
    generateText(data);
    generateShape(data);
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 ${shape}

 ${text}

</svg>`;
}

module.exports = generateLogo;