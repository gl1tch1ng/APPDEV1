const characters = [
  { name: "Frieren", score: 88 },
  { name: "Ayanokouji", score: 95 },
  { name: "Yuji", score: 42 }, // Sorry Yuji, you failed the written exam
];
 
// 1. filter() - keeps only those who passed (60 or higher)
const passing = characters.filter(c => c.score >= 60);
console.log(passing.map(c => c.name)); // ["Frieren", "Ayanokouji"]
 
// 2. find() - finds the exact match
const ayano = characters.find(c => c.name === "Ayanokouji");
console.log(ayano); // { name: 'Ayanokouji', score: 95 }
 
// 3. some() - checks if AT LEAST ONE person failed
console.log(characters.some(c => c.score < 60)); // true (because of Yuji)

// 4. every() - checks if EVERYONE passed
console.log(characters.every(c => c.score >= 60)); // false
 
// 5. sort() - creates a copy and sorts highest to lowest
const ranked = [...characters].sort((a, b) => b.score - a.score);
console.log(ranked.map(c => c.name)); // ["Ayanokouji", "Frieren", "Yuji"]