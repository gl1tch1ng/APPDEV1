// --- 1. try/catch and throw ---
function divide(a, b) {
  if (b === 0) {
    // Throwing a custom error
    throw new Error("Cannot divide by zero, the universe will collapse!");
  }
  return a / b;
}
 
try {
  // Trying to divide 100 by 0
  console.log(divide(100, 0));
} catch (error) {
  // Catching it so the app doesn't crash
  console.log("Something went wrong:", error.message);
}

// --- 2. JSON.stringify & JSON.parse ---
// Creating a JS Object
const character = { name: "Kafka Hibino", age: 32, isKaiju: true };
 
// Converting the object into a JSON string (for sending over the internet)
const jsonString = JSON.stringify(character);
console.log(jsonString); // '{"name":"Kafka Hibino","age":32,"isKaiju":true}'
 
// Parsing the JSON string back into a usable JS object
const parsedCharacter = JSON.parse(jsonString);
console.log(parsedCharacter.name); // "Kafka Hibino"

// Proving they are different types
console.log(typeof jsonString, typeof parsedCharacter); // string object