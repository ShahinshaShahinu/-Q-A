// Promise.any() takes an array of promises and returns a new promise that 
//   resolves with the first resolved promise's value. If all promises reject, 
//   it will rejects with an array of rejection reasons.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 1 rejected");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 2 rejected");
  }, 1500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 3 rejectd");
  }, 1000);
});

Promise.any([promise1, promise3, promise2])
  .then((value) => {
    console.log("At least one promise resolved:", value);
  })
  .catch((error) => {
    console.error("All promises were rejected:", error);
  });