// --- Truthy/Falsy ---
// Swapped "hello" for "Anime"
const values = [0, "", "Anime", null, undefined, [], {}];
 
values.forEach((val) => {
  if (val) {
    console.log(val, "-> truthy");
  } else {
    console.log(val, "-> falsy");
  }
});


// --- &&, ||, ! ---
const username = "Ayanokouji";
const password = "white_room_password";
 
const canLogIn = username !== "" && password !== "";
console.log("Can login?", canLogIn); // true
 
const isAdmin = false;
const isSubscriber = true; // Premium Crunchyroll account!
const canWatch = isAdmin || isSubscriber;
console.log("Can watch anime?", canWatch); // true
 
// Short-circuiting examples
console.log("" || "Guest Otaku");        // "Guest Otaku" (first truthy)
console.log(username && "Welcome back!"); // "Welcome back!" (both truthy)
console.log(!canLogIn);                   // false