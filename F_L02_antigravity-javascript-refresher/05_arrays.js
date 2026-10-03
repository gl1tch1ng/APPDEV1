// 1. Initialize Squad Array (Zero-based Indexing)
let strawHats = ["Luffy", "Zoro", "Nami"];
console.log("Captain (Index 0):", strawHats[0]);
console.log("First Mate (Index 1):", strawHats[1]);

// 2. Array Length
console.log("Initial Squad Size:", strawHats.length);

// 3. push() - Add elements to the end
strawHats.push("Usopp", "Sanji");
console.log("After Recruiting (push):", strawHats);
console.log("New Squad Size:", strawHats.length);

// 4. pop() - Remove element from the end
let removedMember = strawHats.pop();
console.log("Removed Member (pop):", removedMember);
console.log("Final Roster:", strawHats);