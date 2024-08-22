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


const hof  = (callback)=>{
 const userName = prompt("Please enter your name?")
 callback(userName)
}

hof(greet)


