const aboutMe = {
    name: "Mel",
    age: 21,
    course: "BSIS",
    introduce: function () {
        console.log(`Hello, My name is ${this.name}, and I'm ${this.age} years old`)
    }
};

aboutMe.hobby = "Binge Watching";
aboutMe.introduce();