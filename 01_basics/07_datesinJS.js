// let mydate = new Date()
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.getFullYear())
// console.log(mydate.getMonth())
// console.log(mydate.getDay())
// console.log(mydate.getTime())
// console.log(mydate.getMinutesn())

let newDate = new Date();
console.log(newDate.getHours())
console.log(newDate.getMinutes())
console.log(newDate.getSeconds())

newDate.toLocaleString('Default', {
    weekday: "long"
})

console.log(newDate);