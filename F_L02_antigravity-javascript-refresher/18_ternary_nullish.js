// --- 1. The Ternary Operator (Slide 76-77) ---
const examScore = 85;
const result = examScore >= 70 ? "Pass" : "Fail";
console.log("Exam Result:", result); // "Pass"
 
const episodes = 12;
console.log("Is the episode count even or odd?", episodes % 2 === 0 ? "even" : "odd"); // "even"


// --- 2. Optional Chaining (?.) & Nullish Coalescing (??) (Slide 78-79) ---
const user = { name: "Frieren" }; // Notice there is no 'address' property here

// ?. safely checks if address exists before looking for city, preventing a crash
console.log(user.address?.city); // undefined (no crash)

const age = 0;
// || thinks 0 is falsy, so it incorrectly replaces it
console.log(age || 1000); // 1000 (wrong!)

// ?? ONLY replaces null or undefined. It accepts 0 as a valid number!
console.log(age ?? 1000); // 0 (right!)