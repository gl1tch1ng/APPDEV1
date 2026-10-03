// --- 1. Block Scope ---
if (true) {
  let mangaSpoiler = "The main character actually survives";
  console.log("Inside block:", mangaSpoiler); // works fine
}
 
try {
  // Trying to access the let variable outside its curly braces {}
  console.log(mangaSpoiler); 
} catch (error) {
  console.log("Error caught: mangaSpoiler is not defined out here!");
}

// --- 2. Closures ---
// This function creates a private "bubble" for episodesWatched
function createEpisodeTracker() {
  let episodesWatched = 0;
  
  return function watchEpisode() {
    episodesWatched++;
    return episodesWatched;
  };
}
 
// Creating two separate closures (independent trackers)
const dandadanTracker = createEpisodeTracker();
const drStoneTracker = createEpisodeTracker();
 
console.log("Dandadan:", dandadanTracker()); // 1
console.log("Dandadan:", dandadanTracker()); // 2
console.log("Dr. Stone:", drStoneTracker()); // 1 -- completely independent of Dandadan!