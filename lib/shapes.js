class shape {
    constructor(color, font, logo){
        this.color = color
        this.font = font
        this.logo = logo
    };
};
class Circle extends shape{
    constructor(color, font, logo){
        super(color,font,logo);
    }
    render(){
        return `<circle cx="50" cy="50" r="35" fill="${this.color.toLowerCase()}"></circle>
    <text x="50" y="50" alignment-baseline="middle" fill="${this.font.toLowerCase()}" text-anchor="middle" font-size="20">${this.logo}</text>`
    }
};
class Triangle extends shape{
    constructor(color, font, logo){
        super(color,font,logo);
    }
    render(){
        return `<polygon points="100,0 200,200 0,200" fill="${this.color.toLowerCase()}"></polygon>
        <text x="100" y="150" alignment-baseline="middle" fill="${this.font.toLowerCase()}" text-anchor="middle" font-size="20">${this.logo}</text>`
    }
};
class Square extends shape{
    constructor(color, font, logo){
        super(color,font,logo);
    }
    render(){
        return `<rect x="0" y="0" width="200" height="100" fill="${this.color.toLowerCase()}"></rect>
        <text x="150" y="100" alignment-baseline="middle" fill="${this.font.toLowerCase()}" text-anchor="middle" font-size="20">${this.logo}</text>`
    }
};   
function svg_shape(data){
    let shapes = {
    "Circle": `${new Circle(data.color, data.font, data.logo).render()}`,
    "Triangle": `${new Triangle(data.color, data.font, data.logo).render()}`,
    "Square": `${new Square(data.color, data.font, data.logo).render()}`,
    }
    return shapes[data.shape]
}
function generate_svg(data){
    let svg =`
    <svg width="300" height="200">
        ${svg_shape(data)}
    </svg>`;
    return svg
};
module.exports = generate_svg;