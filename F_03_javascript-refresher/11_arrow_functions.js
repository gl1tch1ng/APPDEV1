// implicit return (no curly braces, no 'return' keyword)
const hypeAnime = title => "You need to watch " + title; 

// implicit return doing math
const totalEpisodes = seasons => seasons * 12; 
 
// standard arrow function with a block
const domainExpansion = () => {
  console.log("Infinite Void!");
};

// Testing them out:
console.log(hypeAnime("Dandadan"));
console.log(totalEpisodes(3));
domainExpansion();