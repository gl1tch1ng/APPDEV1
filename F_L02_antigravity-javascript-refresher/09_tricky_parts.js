console.log(10 == "10");   // true
console.log(10 === "10");  // false
 
let upcomingSeason;
let cancelledAnime = null;
 
console.log(upcomingSeason); // undefined
console.log(cancelledAnime); // null

const watcher = {
  name: "Mel",
  regularMethod: function () {
    console.log(this.name);
  },
  arrowMethod: () => {
    console.log(this.name);
  },
};
 
watcher.regularMethod(); // "Mel" (normal functions know who called them)
watcher.arrowMethod();   // undefined (arrow functions do not have their own 'this')

const myWatchlist = ["Dandadan", "Dr. Stone"];
 
const sharedWatchlist = myWatchlist;
sharedWatchlist.push("Jujutsu Kaisen");
console.log(myWatchlist); 
 
const safeWatchlist = [...myWatchlist];
safeWatchlist.push("Bungo Stray Dogs");

console.log(myWatchlist);   
// ["Dandadan", "Dr. Stone", "Jujutsu Kaisen"] - untouched

console.log(safeWatchlist); 
// ["Dandadan", "Dr. Stone", "Jujutsu Kaisen", "Bungo Stray Dogs"] - its own separate array
