const generate_svg = require("./shapes");

let data = {
    "name":"logo",
    "shape": "circle",
    "color": "0000ff",
    "font": "ffffff",
    "logo": "OpA"
}

describe("Logo Shape Circle", () =>{
    it("Should generate a Circle SVG", () =>{
    expect(generate_svg(data)).toBe(`
    <svg width="200" height="300">
    <circle cx="100" cy="100" r="100" fill="0000ff"></circle>
    <text x="40%" y="35%" fill="ffffff" font-size="20">OpA</text>
    </svg>`)
});
})