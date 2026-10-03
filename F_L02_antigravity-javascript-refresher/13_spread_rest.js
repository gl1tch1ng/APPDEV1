// 1. Spread with an array
const season1Episodes = [1, 2, 3];
const allEpisodes = [...season1Episodes, 4, 5, 6];
console.log(allEpisodes); // [ 1, 2, 3, 4, 5, 6 ]
 
// 2. Spread with an object
const character = { name: "Ayanokouji", age: 16 };
const updatedCharacter = { ...character, classroom: "Class D" };
console.log(updatedCharacter); // { name: 'Ayanokouji', age: 16, classroom: 'Class D' }
 
// 3. Rest operator (...args)
function totalWatchTime(...minutes) {
  return minutes.reduce((total, m) => total + m, 0);
}
console.log(totalWatchTime(24, 24, 24, 24)); // 96