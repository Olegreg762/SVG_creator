// Shape class
class Shape{
    constructor(color, font, logo){
        this.color = color
        this.font = font
        this.logo = logo
    };
};
// Class for Circle 
class Circle extends Shape{
    constructor(color, font, logo){
        super(color, font, logo);
    }
    render(color, font, logo){
        return `<circle cx="150" cy="100" r="100" fill="${color}"></circle>
    <text x="150" y="100" alignment-baseline="middle" fill="${font}" text-anchor="middle" font-size="20">${logo}</text>`
    }
};
// Triangle Class
class Triangle extends Shape{
    constructor(color, font, logo){
        super(color, font, logo);
    }
    render(color, font, logo){
        return `<polygon points="150,0 300,200 0,200" fill="${color}"></polygon>
        <text x="150" y="150" alignment-baseline="middle" fill="${font}" text-anchor="middle" font-size="20">${logo}</text>`
    }
};
// Class for Square
class Square extends Shape{
    constructor(color, font, logo){
        super(color, font, logo);
    }
    render(color, font, logo){
        return `<rect x="0" y="0" width="300" height="200" fill="${color}"></rect>
        <text x="150" y="100" alignment-baseline="middle" fill="${font}" text-anchor="middle" font-size="20">${logo}</text>`
    }
}; 
// Function for creating the chosen shape  
function svg_shape({color, font, logo, shape}){
    let shapes = {
    "Circle": new Circle(color, font, logo),
    "Triangle": new Triangle(color, font, logo),
    "Square": new Square(color, font, logo)
    }
    const new_shape = shapes[shape];
    return new_shape.render(new_shape.color, new_shape.font, new_shape.logo)
}
// Function for generating
function generate_svg(data){
    let svg =`
    <svg width="300" height="200">
        ${svg_shape(data)}
    </svg>`;
    return svg
};
// Exports the generate_svg
module.exports = generate_svg;