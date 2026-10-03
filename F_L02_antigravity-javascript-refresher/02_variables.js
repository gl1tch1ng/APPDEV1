// 1. Data Types (String, Number, Boolean)
let characterName = "Goku";
let powerLevel = 9001;
let isHero = true;

// 2. Type Checking with typeof
console.log(characterName, typeof characterName);
console.log(powerLevel, typeof powerLevel);
console.log(isHero, typeof isHero);

// 3. Basic Arithmetic
let baseAttack = 50;
let bonusAttack = 25;
console.log("Addition: ", baseAttack + bonusAttack);
console.log("Division: ", baseAttack / bonusAttack);

// 4. Loose (==) vs Strict (===) Equality
console.log("9001" == 9001);   // true (type coercion)
console.log("9001" === 9001);  // false (strict: string !== number)