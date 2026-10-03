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