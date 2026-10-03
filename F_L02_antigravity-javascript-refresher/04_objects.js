// 1. Create Adventurer Card Object
const adventurerCard = {
    name: "Frieren",
    rank: "First-Class Mage",
    magicType: "Zoltraak",
    guildName: "Continental Magic Association",

    // Method using 'this' to access object properties
    introduce: function () {
        console.log(`Adventurer: ${this.name} | Rank: ${this.rank} | Guild: ${this.guildName}`);
    }
};

// 2. Dot Notation
console.log("Mage Name (Dot Notation):", adventurerCard.name);
console.log("Guild (Dot Notation):", adventurerCard.guildName);

// 3. Bracket Notation (Static & Dynamic Variable Lookup)
console.log("Rank (Bracket Notation):", adventurerCard["rank"]);

const lookupKey = "magicType";
console.log("Specialty Magic (Dynamic Key):", adventurerCard[lookupKey]);

// 4. Dynamically Adding a New Property
adventurerCard.questCount = 150;
console.log("Quests Completed:", adventurerCard.questCount);

// 5. Calling the Object Method
adventurerCard.introduce();