for (let index = 0; index < 11; index++) {
    if (index % 2 == 0) {
        // console.log(index); // 0, 2, 4...
    }
}

const array = ["Harsh", "Nandini", "Ratna", "Sanjay"]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // console.log(element)

}

// break and continue

for (let i = 1; i <= 10; i++) {
    if (i == 5) break;
    console.log(`Value of the i is ${i}`)
}