// --- String Methods ---
const raw = "  Kafka Hibino  ";
const clean = raw.trim(); // Removes the spaces on the outside
const [first, last] = clean.split(" "); // Splits at the space in the middle

console.log(first.toUpperCase()); // "KAFKA"
console.log(clean.includes("Hibino")); // true
console.log(clean.slice(0, 5)); // "Kafka"
console.log(`Full name: ${first} ${last}`); // "Full name: Kafka Hibino"


// --- Number Methods ---
// Getting the episode count out of a string
console.log(parseInt("99episodes"));   // 99

// Rounding a MyAnimeList rating
console.log((8.9999).toFixed(2)); // "9.00"
 
// Trying to do math with text
const result = "kaiju" / 2;
console.log(result);               // NaN (Not a Number)
console.log(Number.isNaN(result)); // true