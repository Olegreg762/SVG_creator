class Shape{
    constructor(color, font, logo){
        this.color = color
        this.font = font
        this.logo = logo
    };
};
class Circle extends Shape{
    render(){
        return `<circle cx="100" cy="100" r="100" fill="${this.color}"></circle>
    <text x="100" y="100" alignment-baseline="middle" fill="${this.font}" text-anchor="middle" font-size="20">${this.logo}</text>`
    }
};
class Triangle extends Shape{
    render(){
        return `<polygon points="150,0 300,200 0,200" fill="${this.color}"></polygon>
        <text x="150" y="150" alignment-baseline="middle" fill="${this.font}" text-anchor="middle" font-size="20">${this.logo}</text>`
    }
};
class Square extends Shape{
    render(){
        return `<rect x="0" y="0" width="300" height="200" fill="${this.color}"></rect>
        <text x="150" y="100" alignment-baseline="middle" fill="${this.font}" text-anchor="middle" font-size="20">${this.logo}</text>`
    }
};   
function svg_shape({color, font, logo, shape}){
    let shapes = {
    "Circle": new Circle(color, font, logo),
    "Triangle": new Triangle(color, font, logo),
    "Square": new Square(color, font, logo)
    }
    return shapes[shape].render()
}
function generate_svg(data){
    let svg =`
    <svg width="300" height="200">
        ${svg_shape(data)}
    </svg>`;
    return svg
};
module.exports = generate_svg;