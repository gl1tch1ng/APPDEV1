const person = { name: "Ayanokouji", age: 16 };
const { name, age } = person;
console.log(name, age); // "Ayanokouji, 16"

const animelist = ["Frieren: Beyond Journey's End", "Kaiju No. 8", "The Fragrant Flower Blooms with Dignity"];
const [animelist1, animelist2] = animelist;
console.log(animelist1, animelist2); // Frieren: Beyond Journey's End Kaiju No. 8

function printName ({name}) {
    console.log(name);
};

printName(person); // "Ayanokouji"