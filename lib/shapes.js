function svg_shape(data){
    let shapes ={
        "Circle":`<circle cx="50" cy="50" r="35" fill="${data.color.toLowerCase()}"></circle>
    <text x="50" y="50" alignment-baseline="middle" fill="${data.font.toLowerCase()}" text-anchor="middle" font-size="20">${data.logo}</text>`,

        "Triangle": `<polygon points="100,0 200,200 0,200" fill="${data.color.toLowerCase()}"></polygon>
    <text x="100" y="150" alignment-baseline="middle" fill="${data.font.toLowerCase()}" text-anchor="middle" font-size="20">${data.logo}</text>`,

        "Square":`<rect x="0" y="0" width="200" height="100" fill="${data.color.toLowerCase()}"></rect>
    <text x="150" y="100" alignment-baseline="middle" fill="${data.font.toLowerCase()}" text-anchor="middle" font-size="20">${data.logo}</text>`
    };
    return shapes[data.shape]
};

function generate_svg(data){
    let svg =`
    <svg width="300" height="200">
        ${svg_shape(data)}
    </svg>`;
    return svg
};
module.exports = generate_svg;