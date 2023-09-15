
// setTimeout(callback,timeout);
// callback is nothing but the function which has been called after some timeout
// setTimeout(function(){},timout)

console.log("Heyyy")
setTimeout(() => {
    console.log("This code is running after 2 seconds ")
    console.log("Because this code lies inside the async function")
}, 2000);
console.log("I hope you understand the meaning of setTimeout");


// There is a concept of Main Stack , Side Stack and Event Loops
// Main stack means execution runs only for sync and another is side stack which takes async only and event loops check main stack and side stack whether side stack has complete his job or not and if yes then event loop add the side stack into the main stack