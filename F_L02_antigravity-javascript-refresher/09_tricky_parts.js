// 1. Loose Equality (==) vs Strict Equality (===)
console.log("--- 1. Equality ---");
console.log("10 == '10'  :", 10 == "10");   // true (type coercion)
console.log("10 === '10' :", 10 === "10");  // false (strict: number !== string)

// 2. undefined vs null
console.log("\n--- 2. Undefined vs Null ---");
let unassignedSkill;
let sealedPower = null;
console.log("Unassigned Skill:", unassignedSkill); // undefined
console.log("Sealed Power    :", sealedPower);      // null

// 3. 'this' Binding in Object Methods vs Arrow Functions
console.log("\n--- 3. 'this' Binding ---");
const fighter = {
    name: "Megumi",
    regularMethod: function () {
        console.log("Regular Method 'this.name':", this.name);
    },
    arrowMethod: () => {
        console.log("Arrow Method 'this.name'  :", this.name);
    }
};

fighter.regularMethod(); // "Megumi" (bound to fighter object)
fighter.arrowMethod();   // undefined (arrow functions inherit lexical 'this')

// 4. Hoisting Demonstration
console.log("\n--- 4. Hoisting ---");
console.log("Hoisted Function Call:", instantJutsu());

function instantJutsu() {
    return "⚡ Instant Transmission Jutsu activated!";
}

console.log("Hoisted var (before assignment):", chant);
var chant = "Domain Expansion!";
console.log("var (after assignment):", chant);

// 5. Reference vs Value (Array Mutation vs Spread Clone)
console.log("\n--- 5. Reference vs Value ---");
const originalRoster = ["Goku", "Vegeta"];
const sharedReference = originalRoster;
sharedReference.push("Piccolo");
console.log("Original after shared reference push:", originalRoster);

const safeClone = [...originalRoster];
safeClone.push("Gohan");
console.log("Original after cloned push (untouched):", originalRoster);
console.log("Safe Cloned Array:", safeClone);
