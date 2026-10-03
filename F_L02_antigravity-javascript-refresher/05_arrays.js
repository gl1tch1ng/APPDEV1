let animeLists = ["Atri -My Dear Moments-", "Bungo Stray Dogs", "Dandadan", "Dr. Stone", "Jujutsu Kaisen"];
animeLists.push("From Old Country Bumpkin to Master Swordsman"); // ["Atri -My Dear Moments-", "Bungo Stray Dogs", "Dandadan", "Dr. Stone", "Jujutsu Kaisen", "From Old Country Bumpkin to Master Swordsman"];
animeLists.shift(); // ["Bungo Stray Dogs", "Dandadan", "Dr. Stone", "Jujutsu Kaisen", "From Old Country Bumpkin to Master Swordsman"];

for (const anime of animeLists) {
    console.log(anime);
}

const prefer = animeLists.map(anime => "I watch " + anime);
console.log(prefer);