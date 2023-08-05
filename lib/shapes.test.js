const generate_svg = require("./shapes");

let data = ""
// Test for making circle with hex colors
describe("Logo Shape Circle", () =>{
    data = {
        "name":"logo",
        "shape": "Circle",
        "color": "0000ff",
        "font": "ffffff",
        "logo": "OpA"
    }
    it("Should generate a Circle SVG", () =>{
    expect(generate_svg(data)).toBe(`
    <svg width="300" height="200">
        <circle cx="50" cy="50" r="35" fill="${data.color.toLowerCase()}"></circle>
    <text x="50" y="50" alignment-baseline="middle" fill="${data.font.toLowerCase()}" text-anchor="middle" font-size="20">${data.logo}</text>
    </svg>`)
});
})