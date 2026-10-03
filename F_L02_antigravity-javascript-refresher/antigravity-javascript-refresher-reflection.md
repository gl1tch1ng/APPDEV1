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