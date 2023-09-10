// for of

let loop = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (const index of loop) {
    console.log(index)
}

const brand = ["BMW", "MERCEDEZ", "PORSCHE", "SUPRA", "LAMBORGHINI"];
for (const cars of brand) {
    if (cars == "SUPRA") {
        continue;
    }
    console.log(`The car of my choices is ${cars}`);
}


// simple for loop
const naav = ["Harsh", "Kunal", "Harkirat", "Dev"];
for (let i = 0; i < naav.length; i++) {
    console.log(`Kucch youtuber ke naam ${naav[i]}`)
}