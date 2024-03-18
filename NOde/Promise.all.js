// the  promise.all() takes an array of promises and returns a new promise that resolves 
//   with an array of their resolved values, maintaining order. If any promise in the 
//   array rejects, the whole Promise.all() rejects.

const promise1=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved ')
    }, 12000);
})

const Promise2 = new Promise((res,rej)=>{
    setTimeout(() => {
        res('promise 2 resolved')
    }, 1500);
});

const Promise3= new Promise((res,rej)=>{
    setTimeout(() => {
        rej('Promise 3 resolved')
    }, 1000);
});

Promise.all([promise1,Promise2,Promise2])
.then((res)=>{
    console.log('All Promises Resolved ,',res);
}).catch((res)=>{
    console.log(
        'An error Occured -',res
    );
})