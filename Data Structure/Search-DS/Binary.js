// let array=[1,8,3,4,5,10,7]
// function binarysearch(array,target){
// let startInd=0
// let endInd=array.length-1
// while(startInd<=endInd){
//     let middle=Math.floor((startInd + (endInd-startInd)/2))
//     if(array[middle]==target){
//         return middle ;
//     }else if (array[middle]>target){
//          endInd=middle-1
//     }else if (array[middle]<target){
//          startInd=middle+1
//     }
// }
// return "not exist";

// }
// console.log(binarysearch(array,10))

// let array=[1,2,3,4,5,6,7,8]

// function binarysearch(array,target){

//     let startInx=0
//     let endInx=array.length-1

//
//     while(startInx<=endInx){
//  let middle=Math.floor((startInx+(endInx-startInx))/2)
//     if(array[middle]==target){
//         return middle;
//     }
//     else if(array[middle]>target){
//         endInx=middle-1
//     }else if(array[middle]<target){
//         startInx=middle+1
//     }
// }
//     return "not found";

// }

// console.log(binarysearch(array,2))

// class stack{
//     constructor(data){
//         this.arr=[]
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     pop(){
//        return this.arr.pop()
//     }
// }

// let newstack=new stack()
// let string="irshad"
// for(i=0;i<string.length;i++){

//     newstack.push(string[i])
// }
// let reverse=""
// for(i=0;i<string.length;i++){
//     reverse+=newstack.pop()
// }
// console.log(reverse);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class stack{
//     constructor(data){
//         this.arr1=[]
//         this.arr2=[]
//         this.size=0
//     }
//     push(data){
//         this.size++
//         this.arr1.push(data)
// }
// changetoQ(){
//     while(this.size>0){
//        this.arr2.push(this.arr1.pop())
//        this.size--
//     }
// }
// pop(){
//     return this.arr2.pop()
// }
// display(){
//     console.log(this.arr1);
//     console.log(this.arr2)
// }
// }
// let stacks=new stack()
// stacks.push(7)
// stacks.push(20)
// stacks.push(30)
// stacks.push(40)
// stacks.display()
// stacks.changetoQ()
// stacks.pop()
// stacks.display()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class stack{
//     constructor(data){
//         this.arr=[]
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     delete(){
//         let middle=Math.floor(this.arr.length/2)
//         this.arr.splice(middle,1)
//     }
//     display(){
//         console,console.log(this.arr);
//     }
// }
// let stacks=new stack()
// stacks.push(10)
// stacks.push(20)
// stacks.push(40)
// stacks.push(90)
// stacks.push(60)
// stacks.push(80)
// stacks.push(30)
// stacks.delete()
// stacks.display()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class stack{
//     constructor(data){
//         this.arr=[]
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     pop(){
//         return this.arr.pop()
//     }
// }
// let stacks=new stack()
// let string="mahammadirshad"
// for(i=0;i<string.length;i++){
//     stacks.push(string[i])
// }
// let  reverse=""
// for(i=0;i<string.length;i++){
//     reverse+=stacks.pop()
// }
// console.log(reverse);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class stack{
//     constructor(data){
//         this.arr=[]
//     }
//     push(data){
//         this.arr.push(data)
//     }
//     pop(){
//         return this.arr.pop()
//     }
// }
// let stacks=new stack()
// let string="irshad"
// for(i=0;i<string.length;i++){
//     stacks.push(string[i])
// }
// let reverse=""
// for(i=0;i<string.length;i++){
//     reverse+=stacks.pop()
// }
// console.log(reverse);

class stack {
  constructor(data) {
    this.arr = [];
  }
  push(data) {
    this.arr.push(data);
  }
  pop() {
    return this.arr.pop();
  }
}
let stacks = new stack();
let string = "mahammad irshad";
for (i = 0; i < string.length; i++) {
  stacks.push(string[i]);
}
let rev = "";
for (i = 0; i < string.length; i++) {
  rev += stacks.pop();
}
console.log(rev);
