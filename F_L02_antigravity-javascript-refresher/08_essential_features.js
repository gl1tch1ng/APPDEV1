// 1. Array Transformation with .map()
const basePowers = [1000, 2500, 4000];
const boostedPowers = basePowers.map(power => power * 50);

console.log("Original Powers:", basePowers);
console.log("Boosted Powers (50x Multiplier):", boostedPowers);

// 2. Object Destructuring
const hunterProfile = {
    name: "Sung Jinwoo",
    rank: "S-Rank",
    classType: "Shadow Monarch"
};

const { name, rank } = hunterProfile;
console.log(`Hunter: ${name} | Rank: ${rank}`);

// 3. Array Spread Operator (...)
const originalParty = ["Frieren", "Himmel", "Heiter", "Eisen"];
const updatedParty = [...originalParty, "Fern", "Stark"];

console.log("Original Party:", originalParty);
console.log("Updated Party with Recruits:", updatedParty);
