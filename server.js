// const name = "hemanth"
// console.log(name);

// console.log(__dirname);


// setTimeout(()=>{
//     console.log("Hello World");
// }, 10000)

// function myname(name){
//     console.log(`Hello ${name}`)
// }
// setTimeout(myname, 5000, "Hemanth")

// setInterval(()=>{
//     console.log(`Hello Bro`)
// }, 2000)


// function myname (name){
//     console.log(`My name is ${name}`)
// }
// setInterval(myname, 2000, "Hemanth")

// function printTime(){
//     console.log(new Date().toLocaleTimeString())
// }
// setInterval(printTime, 1000)


// let counter = 0;
// const intervalId = setInterval(() => {
//     counter++;
//     console.log(`Counter: ${counter}`);
//     if (counter >= 5) {
//         clearInterval(intervalId);
//         console.log("The interval has been cleared");
//     }
// }, 1000);


// function myname(name){
//     console.log(`My name is ${name}`)
// }
// myname("hemanth")

// const sayHi = require('./names')
// const reqq = require('./names')
// sayHi("hemanth")



// const summ = require('./add')
// const subb = require('./sub')
// summ(12, 12)
// subb(12, 3)

// const names = require('./nam')
// names("Hemanth")


// const singlePerson = require('./names')
// console.log(singlePerson)

const {os} = require('os')
const user = os.userInfo();
console.log(user)