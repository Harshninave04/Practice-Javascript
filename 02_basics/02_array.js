// concatinating two strings

const marvel = ["Spiderman", "Ironman", "Captain America"];
const dc = ["Batman", "Superman", "Flash"];
const yt = ["Bhuvan Bam", "Carry Minati", "Ashish Chanchlani"]
const heroes = marvel.concat(dc);
// console.log(heroes);

const allHeroes = [...marvel, ...dc, ...yt];
console.log(allHeroes);


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]