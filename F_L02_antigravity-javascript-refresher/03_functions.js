// 1. Regular Function (Function Declaration)
function calculateAttack(attackName, basePower, multiplier) {
    return attackName + " dealt " + (basePower * multiplier) + " damage!";
}

// 2. Arrow Function (One-liner with implicit return)
const boostPower = (power, multiplier) => power * multiplier;

// 3. Function returning an Object
function calculateBattleStats(basePower, chakraMultiplier) {
    return {
        standardDamage: basePower * chakraMultiplier,
        criticalDamage: basePower * chakraMultiplier * 1.5
    };
}

// 4. Function Invocations & Logging
console.log(calculateAttack("Rasengan", 100, 3));
console.log("Boosted Kamehameha Power:", boostPower(250, 4));
console.log("Battle Stats:", calculateBattleStats(80, 2.5));