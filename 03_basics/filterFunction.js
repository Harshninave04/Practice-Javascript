// what is filter function ?

//The JavaScript Array filter() Method is used to create a new array from a given array consisting of only those elements from the given array which satisfy a condition set by the argument method.

let songs = [
  { name: "One Love", singer: "Shubh", duration: 3.43 },
  { name: "Khatta flow", singer: "Seedhe Maut", duration: 2.33 },
  { name: "Hola Amigo", singer: "Kr$na", duration: 4.0 },
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
