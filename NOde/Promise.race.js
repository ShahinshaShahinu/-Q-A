//  Promise.race() takes an array of promises and returns a new promise that resolves or rejects  
//   as soon as the first promise in the array resolves or rejects  (either resolves or rejects).


const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 1 rejected");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 2 resolved");
  }, 1500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 rejected");
  }, 1000);
});

Promise.race([promise1, promise2, promise3])
  .then((res) => {
    console.log("The first promise to resolve or reject:", res);
  })
  .catch((err) => {
    console.error("An error occurred in the first promise to reject:", err);
  });
