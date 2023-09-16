// what is promise ?
// Promise is either resolved state or reject state

var answer = new Promise((res, rej) => {
    if (true) {
        return res();
    } else {
        return rej();
    }
})

answer.then(() => {
    console.log("resolved")
})
    .catch(() => {
        console.log("rejected")
    })

// Above code is the structure of Async promise

//Question 1 : User will ask for a number and number is between 0-9 and if the number is less than 5 resolved else reject

var ans = new Promise((res, rej) => {
    var number = Math.floor(Math.random() * 10);
    console.log(number)
    if (number < 5) {
        return res();
    } else {
        return rej();
    }
})

ans.then(() => {
    console.log("resolved")
})
    .catch(() => {
        console.log("rejected")
    })