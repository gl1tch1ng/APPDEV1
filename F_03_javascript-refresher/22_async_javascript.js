// --- 1. Callbacks (Slide 99) ---
function fetchUserMock(callback) {
  setTimeout(() => {
    callback({ name: "Mel", favoriteAnime: "Dandadan" });
  }, 1000);
}
 
fetchUserMock((user) => {
  console.log("1. (Callback) Got user:", user);
});

// --- 2. Promises & async/await (Slide 101) ---
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Ayanokouji", age: 16 }), 1000);
  });
}
 
async function showUser() {
  try {
    const user = await fetchUser();
    console.log("2. (Async/Await) Got user:", user);
  } catch (error) {
    console.log("Failed to load user");
  }
}
showUser();

// --- 3. Real Fetch API (Slides 103-104) ---
// Note: I renamed these so they don't crash each other!

// Fetch using Promises (.then)
function getTodoPromise() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
}

getTodoPromise()
    .then(todo => console.log("3. (Promise Fetch) Todo: ", todo.title))
    .catch(error => console.error("Something went wrong: ", error))

// Fetch using Async/Await
async function getTodoAsync() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  const data = await response.json();
  return data;
}

async function fetchTodo() {
  try {
    const todo = await getTodoAsync();
    console.log("4. (Async Fetch) Todo: ", todo.title);
  } catch (error) {
    console.error("Something went wrong: ", error);
  }
}
fetchTodo();


// --- 4. Synchronous vs Asynchronous (Slide 105) ---
let myName = "Kafka Hibino";
let myAge = 32;
let address = "Defense Force Base";

// This takes 2 seconds, so JavaScript will skip it and do the console.logs below first!
setTimeout(() => {
  console.log("5. (Async Timeout) This message is printed after 2 seconds");
}, 2000);

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Address:", address);