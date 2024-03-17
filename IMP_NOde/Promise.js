let k = 0;
const myPromise = new Promise((resolve, reject) => {
  if (k !== 0) {
    resolve("Promise fulfilled with result");
  } else {
    reject("Promise rejected with an error");
  }
});

console.log("Promise state:", myPromise); // Pending

myPromise.then((res)=>{
    console.log('FullFilled-',res);
})
.catch((err)=>{
    console.log('Rejected-',err);
}).finally(()=>{
    console.log('finally block: Promise Settled');
});

console.log("Promise state after .then():", myPromise); // Still pending

// Simulating an asynchronous operation
setTimeout(() => {
  k = 1;
  console.log("Updated k to 1");
  console.log("Promise state after setTimeout     :", myPromise); // Fulfilled
}, 1000);
