### 01_base_syntax.js

**Prompt:**
Using only `01_base_syntax.js` as the target, help me solve this exercise. Requirements: 1) Log the phrase 'Hello Anime World!'. 2) Declare two variables using `let`: one named `heroName` and another named `heroname` (different casing). Assign them two different anime protagonists (like 'Naruto' and 'Luffy'). 3) Log both variables to the console to prove they are different. Explain your plan first, wait for my approval, then write the code, run it, and briefly explain the lines.

**Reflection:**
Using anime characters to test variable casing made it super clear that JavaScript is strictly case-sensitive. Seeing that `heroName` (Naruto) and `heroname` (Luffy) can exist at the same time without overwriting each other proved that even a single capital letter changes the variable entirely.

### 02_variables.js

**Prompt:**
Open `02_variables.js`. Do not write the code yet. First, explain the difference between a `string`, `number`, and `boolean` using an anime character's stats as examples (like a character's name, their power level, and whether they are a hero or villain). Then explain what `typeof` does, and clarify the exact difference between `==` and `===`. Once you explain these concepts, give me a short implementation plan to solve the exercise.

**Reflection:**
Using anime stats made understanding data types much more fun. A string is just text (like a name), a number is for math (like a power level), and a boolean is a simple true/false toggle (like hero status). I also learned that `==` allows JavaScript to try and convert types before comparing, which can cause bugs, while `===` is a strict comparison that checks both the value and the type. The `typeof` operator acts like a scouter, identifying exactly what data type a variable is holding.

### 03_functions.js

**Prompt:**
Open `03_functions.js`. Do not write code yet. Explain regular functions, function expressions, and arrow functions using an anime character's special attack calculation (like Goku's Kamehameha or Naruto's Rasengan damage formula with `basePower` and `chakraMultiplier`). After the explanation, give a step-by-step plan to implement `03_functions.js` using both standard functions and arrow functions. Ask for my approval before executing.

**Reflection:**
Comparing JavaScript functions to anime special attack formulas made concepts like parameters and return values crystal clear. Parameters act as input energy or chakra multipliers, while the return value represents the final attack damage output. Converting standard functions into modern arrow functions (`() => {}`) makes the codebase cleaner while keeping the exact same combat calculation logic.

### 04_arrays.js

**Prompt:**
Open `04_arrays.js`. Do not write code yet. Explain how JavaScript arrays and array methods (like `push`, `pop`, `length`, and zero-based indexing) work using an anime squad roster as an example (like the Straw Hat Pirates or Class 1-A recruits). Then give me a step-by-step plan to solve `04_arrays.js`, wait for my approval, then write and run the code.

**Reflection:**
Modeling arrays as an anime squad roster made index positions and array methods intuitive. Zero-based indexing means index `0` is always the captain or leader. Using `.push()` recruits a new member to the back of the team, `.pop()` removes the last member, and `.length` tracks the current total squad size.

### 05_objects.js

**Prompt:**
Open `05_objects.js`. Do not write code yet. Explain how JavaScript objects, key-value pairs, dot notation, and bracket notation work using an anime guild profile card as an example (like an Adventurer Guild card with properties like `name`, `rank`, `magicType`, and `guildName`). Then give me a step-by-step plan to solve `05_objects.js`, wait for my approval, then write and run the code.

**Reflection:**
Thinking of JavaScript objects as anime guild profile cards made key-value pairs and property access very clear. Dot notation (`character.rank`) provides a quick, clean way to read or update character stats, while bracket notation allows dynamic key access. Grouping related attributes inside a single object makes managing complex entity data structured and efficient.

### 06_control_structures.js

**Prompt:**
Open `06_control_structures.js`. Do not write code yet. Explain how `if/else` conditionals, `switch` statements, and loops (`for`, `while`) work using an anime tournament arc or stamina check as an example (e.g., checking if `heroStamina > 20` to perform a special move, or a `for` loop iterating through 5 tournament rounds). Then give me a step-by-step plan to solve `06_control_structures.js`, wait for my approval, then write and run the code.

**Reflection:**
Relating control structures to anime tournament rules and stamina checks made logic flow easy to follow. `if/else` branching allows dynamic decision-making based on variable thresholds (like remaining energy), while loops automate repeated combat actions or round progression until a stopping condition is met.