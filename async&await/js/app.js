

// Asynchronous operaton : This mean the result or value they produce  isn't immediately available.

// async : it return a promise ()
// await : it tells js to wait for a promise to reslove before continouint to the next lien of code

//why to use (async and await): easy to read and wirte 
async function fetchDataFromApi(){
  // Data fetching logic data
try{
  const response =  await fetch('htt://api.alquran.cloud/v1/surah')
  const result = await response.json()
    console.log(result.data);
} catch(error){
  console.error(`Error while fetching data `+error);
  
}
  
}


function fetchDataFromApiThen(){
  fetch('https://api.alquran.cloud/v1/surah')
  .then(res=> res.json())
  .then(res => {
    const dataList = res.data;
    console.log(dataList);
    
  }).catch(err => console.error("Error fetching"))
}


// sythic sugar

fetchDataFromApi();

fetchDataFromApiThen()

console.log("Done with fetching data");


// 

  function add(a,b){
  let res =  a +b ;
}

let res = add(2,3)
console.log(res);
