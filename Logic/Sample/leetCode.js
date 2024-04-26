let ar =[1,2,3] ;




function pushi(l) {
  let k=[]
  let ss=ar[l]
  
  console.log(ss);
  k.push(ss)
  if (l==0) {
    return k
  }
  return [...pushi(l-1),...k]
}
console.log(pushi(ar.length-1));


