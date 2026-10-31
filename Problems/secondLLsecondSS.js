let ar=[1,42,42,180] ;
let l =-Infinity;
let sl=-Infinity;

let sm=Infinity;
let sssm =Infinity;

for (let i = 0; i < ar.length; i++) {
    if(ar[i]>l){
        sl=l;
        l=ar[i]
    }else if(ar[i]>sl){
        sl=ar[i]
    }

  if (ar[i] <sm) {
    sssm = sm;
    sm = ar[i];
  } else if (ar[i] < sssm) {
    sssm=ar[i]
  }

}

console.log(sm,sssm ,'sm , sssm' ,l,sl , 'lg, sl');

