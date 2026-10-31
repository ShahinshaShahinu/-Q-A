let ar=[2,5,6,5];


let sm = ar[0]
let secsm = ar[1] ;


let dif = secsm -sm ;
let miss =[]
if(dif!=1){

  for (let i = 0; i < ar.length; i++) {
      if(sm<secsm){
        sm=sm+1
        miss.push(sm)
      }
  }
}
miss.pop()

console.log(miss);