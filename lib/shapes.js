function svg_shape(data){
    let shapes ={
        "Circle":`<circle cx="50%" cy="50 r="40" fill=${data.color}/>
                <text x=40% y=35% fill=${data.font} font-size=20>${data.logo}</text>`,

        "Triangle": `<polygon points="100,0 200,200 0,200" fill=${data.font}/>
                <text x=40% y=50% fill=${data.font} font-size=20>${data.logo}</text>`,

        "Square":`<rect x=0 y=0 width="200" height="100" fill=${data.font}/>
                <text x=37% y=17% fill=${data.font} font-size=20>${data.logo}</text>`
    };
    return shapes[data.shape]
};

function generate_svg(data){
    let svg =`<svg width=200 height=300>
    ${svg_shape(data)}
    </svg>`
    return svg
};
module.exports = generate_svg;