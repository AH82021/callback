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

// let first = ()=> console.log("Hello, First");
// let  second = ()=> {
//   setTimeout(function(){
//     console.log("Hello, Second");
//   },5000)
// }

// first();
// second();
// console.log("Hello , I am here");



// const learnGit = ()=> console.log('Hello, Everyone');

// setTimeout(learnGit,3000)


// function asyncOperation(func) {
//   console.log("Operation Started ...");

//   setTimeout(()=> {
//     console.log('Hello, Everyone');
//     func();
//   },2000)
  
// }


// asyncOperation(()=>{
//   console.log("Callback execured after operation completion");
  
// })



function displayTime(){

  console.log("Current Time " + new Date().toLocaleTimeString());
  
}

//setInterval(displayTime,5000)


// document.getElementById("btn").addEventListener('click',()=>{
//   console.log("The show button Clicked");
  
// })


// document.getElementById("myForm").addEventListener('submit',()=>{
//   event.preventDefault();
//   console.log("This is should be dispalyed");
  
// })
// // promise => 1- fillflied , 2- pending 3- rejected
// // json (javaScript Object Notaion)

// // fetch('https://jsonplaceholder.typicode.com/posts')
// // .then(res => res.json() )
// // .then(data => console.log(data))
// // .catch(err => console.log("Error fetching data: ",err));



// console.log("Hello");


// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json() )
//  .then(posts =>{
//    const postBox = document.getElementById("postContainer");
//    posts.forEach(post =>{
//     const postElment = document.createElement('h1');
//     const postBody = document.createElement('h2');

//     postElment.textContent = `Titile ${post.title}`
//     postBody.textContent = `Body ${post.body}`
//     postBox.appendChild(postElment)
//     postBox.appendChild(postBody)

//    })
//  })
//  .catch(err => console.log("Error fetching data: ",err));



// // CallBack Hell 

// // setTimeout(function(){
// //   console.log('First');
// //   setTimeout(function(){
// //     console.log('Second');
// //     setTimeout(function(){
// //        console.log("Third");
  
// //     },1000)
// //   },1000)
// // },1000)

// // Promise


// let prom = new Promise((res,rej)=>{
//    setTimeout(()=>res("done"),1000)
// })

// prom.then(res=>console.log(res))


// let projRes = new Promise((res,rej)=>{
//   setTimeout(()=>rej("Opps, some error happend! "),1000)
// })


// projRes.then(
//   (dta)=>console.log(dta))
//   .catch(err=> console.error(`Error hppend promise rejected ${err}`))
  


// 

// 1 sec
console.log("Hello Promise");

// 2 min (120 sec)
const getWeahter = ()=>{
  // call an external weahter api fetch()
  // 

}

// sunny 

console.log(getWeahter("Kabul"));

// 20 sec
const add =(a,b)=>{
  return a +b;
}
// 1 sec
console.log(add(5,6));

let objName ={
  id : 1,
  name :'Jack'
}


const executorFunciton = (reslove, reject) => {
  if(false){
    reslove("All dish are clean now")
  } else{
    reject("Error happened")
  }
}

const myPromise = new Promise(executorFunciton)
//  fetch()

myPromise
.then(data => console.log(data))
.catch(err => console.log(err))


const inventory ={
  backPack : -1,
  jacket : 10,
  sunglasses : 100

}

function orderExec(res, rej){
if(inventory.backPack >0){
  res("Sucessfuly order processed")
} else {
  rej("Sorry all backback are sold out")
}
}



function orderBackPack(){

  return new Promise(orderExec);
}


const orderPromise = orderBackPack();
//consume 

orderPromise
.then(data => console.log(data))
.catch( err => console.log(err))




function getDataFromApi(){

  fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
  .then(data => data.json())
  .then(dataFromJson =>{

    const jokeDiv = document.createElement('div');

    jokeDiv.textContent = dataFromJson.joke;

    jokeDiv.style.padding ='10px'
    jokeDiv.style.margin ='10px'
    jokeDiv.style.backgroundColor ='#d0f0f0'



    document.body.appendChild(jokeDiv)
  })
  .catch(error => console.log("Error fetching joke:",error))


}




// Function to fetch and display Surah data
function fetchAndDisplaySurahData() {
  fetch('https://api.alquran.cloud/v1/surah')
    .then(res => res.json())
    .then(json => {
      const surahList = json.data;

      // Container to hold all Surah divs
      const containerDiv = document.createElement('div');
      containerDiv.style.display = 'flex';
      containerDiv.style.flexWrap = 'wrap';
      containerDiv.style.justifyContent = 'space-around';
      containerDiv.style.padding = '20px';

      surahList.forEach(surah => {
     
        const surahDiv = document.createElement('div');
        surahDiv.style.border = '1px solid #ccc';
        surahDiv.style.borderRadius = '8px';
        surahDiv.style.padding = '15px';
        surahDiv.style.margin = '10px';
        surahDiv.style.width = '250px';
        surahDiv.style.backgroundColor = '#f9f9f9';
        surahDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

       
        const arabicName = document.createElement('h3');
        arabicName.textContent = surah.name;
        arabicName.style.color = '#2c3e50';
        arabicName.style.textAlign = 'center';
        surahDiv.appendChild(arabicName);


        const englishName = document.createElement('p');
        englishName.textContent = `English Name: ${surah.englishName}`;
        englishName.style.fontWeight = 'bold';
        surahDiv.appendChild(englishName);

    
        const translation = document.createElement('p');
        translation.textContent = `Translation: ${surah.englishNameTranslation}`;
        surahDiv.appendChild(translation);

    
        const numberOfAyahs = document.createElement('p');
        numberOfAyahs.textContent = `Number of Ayahs: ${surah.numberOfAyahs}`;
        surahDiv.appendChild(numberOfAyahs);

    
        const revelationType = document.createElement('p');
        revelationType.textContent = `Revelation Type: ${surah.revelationType}`;
        surahDiv.appendChild(revelationType);

      
        containerDiv.appendChild(surahDiv);
      });

      
      document.body.appendChild(containerDiv);
    })
    .catch(error => console.error('Error fetching Surah data:', error));
}

fetchAndDisplaySurahData();


// 20 min 
// async and await 
// arrray 
// Promise
// Object 
// let , var , cont 
// dom 
// consume api 
// function 
// this 
// callBack
// HOF
// 

// node js 

// async and await 
