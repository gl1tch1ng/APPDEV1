// 1. If-Else Conditionals (Stamina Check)
let heroStamina = 50;

if (heroStamina >= 80) {
    console.log("Stamina High: Unleash Ultimate Finisher (Super Spirit Bomb)!");
} else if (heroStamina >= 20) {
    console.log("Stamina Sufficient: Perform Special Attack (Kamehameha)!");
} else {
    console.log("Stamina Low: Fall back and recharge ki.");
}

// 2. Switch Statement (Battle Form Check)
let battleForm = "Super Saiyan";

switch (battleForm) {
    case "Base":
        console.log("Form: Normal combat capabilities.");
        break;
    case "Super Saiyan":
        console.log("Form: 50x power multiplier active!");
        break;
    case "Ultra Instinct":
        console.log("Form: Supreme speed and automated dodging!");
        break;
    default:
        console.log("Form: Unknown transformation mode.");
}

// 3. For Loop (Tournament Rounds)
console.log("--- Tournament Begins ---");
for (let round = 1; round <= 5; round++) {
    console.log(`Tournament Round ${round}: Begin Battle!`);
}

// 4. While Loop (Energy Depletion)
console.log("--- Energy Depletion Simulation ---");
let energy = 30;
while (energy > 0) {
    console.log(`Attacking! Energy remaining: ${energy}`);
    energy -= 10;
}
console.log("Energy depleted! Hero must rest.");