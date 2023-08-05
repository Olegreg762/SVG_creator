const generate_svg = require("./shapes");

let data = ""
// Test for making circle with hex colors
test("Logo Shape Circle", () =>{
    data = {
        "name":"logo",
        "shape": "Circle",
        "color": "#33859e",
        "font": "#822e9e",
        "logo": "OpA"
    }
    expect(generate_svg(data)).toBe(`
    <svg width="300" height="200">
        <circle cx="100" cy="100" r="100" fill="${data.color.toLowerCase()}"></circle>
    <text x="100" y="100" alignment-baseline="middle" fill="${data.font.toLowerCase()}" text-anchor="middle" font-size="20">${data.logo}</text>
    </svg>`)
});
// Test for Making Triangle with mixed hex and word colors 
test("Logo Shape Triangle", () =>{
    data = {
        "name":"logo",
        "shape": "Triangle",
        "color": "blue",
        "font": "#baeb34",
        "logo": "MCR"
    }
    expect(generate_svg(data)).toBe(`
    <svg width="300" height="200">
        <polygon points="100,0 200,200 0,200" fill="${data.color.toLowerCase()}"></polygon>
        <text x="100" y="150" alignment-baseline="middle" fill="${data.font.toLowerCase()}" text-anchor="middle" font-size="20">${data.logo}</text>
    </svg>`
    )
});
// Test for making Rectangle with word colors
test("Logo Shape Rectangle", () =>{
    data = {
        "name":"logo",
        "shape": "Square",
        "color": "red",
        "font": "green",
        "logo": "UNN"
    }
    expect(generate_svg(data)).toBe(`
    <svg width="300" height="200">
        <rect x="0" y="0" width="300" height="200" fill="${data.color.toLowerCase()}"></rect>
        <text x="150" y="100" alignment-baseline="middle" fill="${data.font.toLowerCase()}" text-anchor="middle" font-size="20">${data.logo}</text>
    </svg>`

    )
});