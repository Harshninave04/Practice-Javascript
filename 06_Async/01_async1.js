// What is the meaning of sync ?
//Actions happen one at a time, in a specific order, and you have to wait for each action to finish before the next one starts. It's like waiting in line at a grocery store; each person goes one by one.
// Waiting for one job/work to finish so that we can start another is known as sync/synchronous.

// What is the meaning of async ?
//Actions can happen simultaneously, without waiting. You can start one action and move on to another without waiting for the first one to complete. It's like cooking multiple dishes in a kitchen; you can work on different parts of the meal at the same time.

// How to determine whether we're writing async or not ?

// if we are using something like
/*setInterval
setTimeout
promises
fetch
axios
XMLHttpRequest*/

// Apart from this everything is sync