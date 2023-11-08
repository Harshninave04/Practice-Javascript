// what is filter function ?

//The JavaScript Array filter() Method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method.

let songs = [
  { name: "One Love", singer: "Shubh", duration: 3.43 },
  { name: "Khatta flow", singer: "Seedhe Maut", duration: 2.33 },
  { name: "Cheques", singer: "Shubh", duration: 3.13 },
  { name: "Hola Amigo", singer: "Kr$na", duration: 4.0 },
  { name: "Baller", singer: "Shubh", duration: 2.49 },
  { name: "Wet dreamz", singer: "J. Cole", duration: 5.5 },
];

console.log(songs.filter((song) => song.name == "One Love"));
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log(songs.filter((song) => song.duration > 5));
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log(songs.filter((song) => song.duration > 4));
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log(songs.filter((song) => song.duration > 3));
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log(songs.filter((song) => song.duration > 2));
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log(songs.filter((song) => song.singer == "Shubh"));




console.log("+++++++++++++++++++++++++++++++++++++++");
// Every() and Some() method - Every() method are used to find out the element present in the array or not . Some() method checks one of the element which satisfies the condition present in the array or not, If the condition is true then it passes the boolean value true else false !

let forEvery = songs.every((song) => song.singer == "Shubh");
let forSome = songs.some((song) => song.singer == "Shubh");
console.log(forEvery);
console.log(forSome);