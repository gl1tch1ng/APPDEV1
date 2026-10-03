// 1. Simulating an Anime Database Query with Callbacks and setTimeout
function fetchAnimeCharacter(id, callback) {
    console.log(`[Database] Querying character record for ID: ${id}...`);
    setTimeout(() => {
        const character = {
            id: id,
            name: "Sung Jinwoo",
            rank: "S-Rank Shadow Monarch",
            level: 100
        };
        callback(character);
    }, 1000); // 1-second simulated network/database delay
}

// 2. Secondary Query for Equipment
function fetchEquippedWeapon(characterName, callback) {
    console.log(`[Database] Querying equipped weapon for ${characterName}...`);
    setTimeout(() => {
        const weapon = {
            weaponName: "Demon King's Shortsword",
            attackPower: 350
        };
        callback(weapon);
    }, 800); // 0.8-second simulated delay
}

// 3. Demonstrating Synchronous vs Asynchronous Execution Order
console.log("=== Battle System Booting Up (Synchronous Start) ===");

// Initiate the asynchronous call
fetchAnimeCharacter(1, (character) => {
    console.log(">>> [Callback 1] Received Character Data:", character);

    // Nested callback demonstrating sequential fetching (Callback Chaining)
    fetchEquippedWeapon(character.name, (weapon) => {
        console.log(">>> [Callback 2] Received Weapon Data:", weapon);
        console.log(`>>> Ready for Combat: ${character.name} equipped with ${weapon.weaponName}!`);
    });
});

console.log("=== Main Thread Continues (Synchronous End - Non-Blocking!) ===");
