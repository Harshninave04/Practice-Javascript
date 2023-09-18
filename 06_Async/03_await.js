// What is async or await function?
// -async and await make promises easier to write
// -The await keyword can only be used inside an async funtion
// -Await function is used to wait for the promise . It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.

// Below example shows the basic use of the await keyword in js
const getData = async () => {
    let data = await "Hello World";
    return data;
}
getData().then(data => console.log(data))

console.log(1);
getData();
console.log(2)

// Output : 1
// 2
// Hello World

// Notice that the console prints 2 before the the "Hello world". this is due to the usage of the await keywordN