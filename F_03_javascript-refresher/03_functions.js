function whispher(secret) {
    return "My secret is " + secret;
};

const cube = num => {
    return num * num * num;
};

function calculator(f, g) {
    return { sum: f + g, product: f * g }
};

console.log(whispher("I'm not telling :)"));
console.log(cube(5));
console.log(calculator(6, 7));