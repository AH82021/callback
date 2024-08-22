// Callback => 

// hof 

// define a afunciton 
const sayHello = ()=> {
  console.log("Hello, world!");
  
}

// calling a funciotn
sayHello();


function greet(name){
  console.log(`Hello, ${name}`);
  
}

//greet("John Doe")


// const hof  = (callback)=>{
//  const userName = prompt("Please enter your name?")
//  callback(userName)
// }

// hof(greet)
// 12 (6) (6)  
// req(titanic) => api => database  10


// synchrounous 
// Asynchronous 

// 🚗
// 🚓
// beats 

// calll 50 
// Hello
// mininute 
// 6o 
// 1000ms

let first = ()=> console.log("Hello, First");
let  second = ()=> {
  setTimeout(function(){
    console.log("Hello, Second");
  },5000)
}

first();
second();
console.log("Hello , I am here");



const learnGit = ()=> console.log('Hello, Everyone');

setTimeout(learnGit,3000)


function asyncOperation(func) {
  console.log("Operation Started ...");

  setTimeout(()=> {
    console.log('Hello, Everyone');
    func();
  },2000)
  
}


asyncOperation(()=>{
  console.log("Callback execured after operation completion");
  
})



function displayTime(){

  console.log("Current Time " + new Date().toLocaleTimeString());
  
}

//setInterval(displayTime,5000)



