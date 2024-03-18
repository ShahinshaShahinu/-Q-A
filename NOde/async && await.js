// by returning a new Promise inside the function, 
// it transforms/will make /will change  the function into an asynchronous function.
function delay(ms){
       return new Promise((resolve,reject)=>{
        setTimeout(() => {
           resolve() 
        }, ms);
       })
}

 async function sample(){
   console.log("start ");
   await delay(2000);
   // await delay(2000) block will execute first
   console.log(
     " and then the code following it will execute , after the awaited promise resolves "
   );
   console.log("after 2 second");
 }
sample()