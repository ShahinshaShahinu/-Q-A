//////////////insertionsort//////////////

// function insertion(arr){
//     for(i=1;i<arr.length-1;i++){
//       let current=arr[i]
//       let j=i-1
//       if(arr[i]<arr[j]){
//         arr[j+1]=arr[j]
//         j--
//       }
//       arr[j+1]=current
//     }
// }
// let arr=[2,1,4,3,7,6,8,9]
// insertion(arr)
// console.log(arr)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////bubblesort/////

// function bubblesort(arr){
//     for(i=0;i<arr.length-1;i++){
//         for(j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//             }
//         }
//     }
// }
// let arr=[2,1,3,6,5,7,6]
// bubblesort(arr)
// console.log(arr)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////selection//////////

// function selection(arr){
//     for(i=0;i<arr.length-1;i++){
//         let min=i
//         for(j=i+1;j<arr.length-1;j++){
//             if(arr[j]<arr[min]){
//                 min=j
//             }
//         }
//             if(min!=i){
//                 let temp=arr[min]
//                 arr[min]=arr[i]
//                 arr[i]=temp

//         }
//     }
// }
// let arr=[2,1,5,4,7,3,9]
// selection(arr)
// console.log(arr);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////quicksort//////////

// function quicksort(arr){
//     quicksorthelper(arr,0,arr.length-1)
//     return arr
// }
//  function quicksorthelper(arr,start,end){
//     if(start>=end){
//         return
//     }
//     let pivote=start
//     let i=start+1;
//     let j=end;

//     while(i<=j){
//         while(arr[i]<arr[pivote]){
//             i++
//         }
//         while(arr[j]>arr[pivote]){
//             j--
//         }
//         if(i<j){
//            swap(arr,i,j)
//            i++;
//            j--;
//         }
//     }
//     swap(arr,j,pivote)
//     quicksorthelper(arr,start,j-1)
//     quicksorthelper(arr,j+1,end)
// }
// function swap(arr,i,j){
//     let temp=arr[j]
//     arr[j]=arr[i]
//     arr[i]=temp
// }

// let arr=[2213,154,565,3,77,6,78,8,9]
// console.log(quicksort(arr));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////mergesort//////////

// function mergesort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let middle=Math.floor(arr.length-1/2)
//     let first=arr.slice(0,middle)
//     let end=arr.slice(middle)
//     return join(mergesort(first),mergesort(end))
// }
// function join(first,end){
//       let newarr=[]
//       let i=0;
//       let j=0;

//       while(i<first.length && j<end.length ){
//         if(first[i]<end[j]){
//             newarr.push(first[i++])

//         }else{
//             newarr.push(end[j++])
//         }
//       }
//       while(i<first.length){
//         newarr.push(first[i++])
//     }
//     while(j<end.length){
//         newarr.push(end[j++])
//     }
//       return newarr
// }
// let arr=[222,1,5,324,22,2,4,8,7,9]
// console.log( mergesort(arr))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////stack//////////

// class node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class stack{
//     constructor(){

//         this.top=null
//     }

//     push(data){
//         let newnode =new node(data)
//         if(this.top==null){
//             this.top=newnode
//         }else{
//             newnode.next=this.top
//             this.top=newnode
//         }
//     }
//     pop(){
//         if(this.top==null){
//         console.log("empty")
//         return
//         }
//         this.top=this.top.next

//     }
//     peek(){
//         if(this.top==null){
//         console.log("empty")
//         return
//         }
//       return this.top.data

//     }

//     display(){
//         let temp=this.top
//         while(temp!=null){
//             console.log(temp.data);
//             temp=temp.next
//         }
//     }
// }
// let newstack=new stack()
// newstack.push(10)
// newstack.push(20)
// newstack.push(77)
// newstack.push(33)
// newstack.push(30)
// newstack.pop()

// newstack.display()
// // newstack.peek()
// console.log(newstack.peek())

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////queue//////////

// class node{
//     constructor(data){
//         this.data=data
//         this.next=null
//     }
// }
// class stack{
//     constructor(){

//         this.front=null
//         this.rear=null
//     }

//     enqueue(data){
//         let newnode = new node(data)
//         if(this.rear==null){
//             this.rear=this.front=newnode
//             return
//         }
//         this.rear.next=newnode
//         this.rear=newnode
//     }
//     dequeue(){
//         if(this.front==null){
//         console.log("empty")
//         return
//         }
//         this.front=this.front.next
//         if(this.front==null){
//             this.rear==null
//         }
//     }

//     display(){
//         let temp=this.front
//         while(temp!=null){
//             console.log(temp.data);
//             temp=temp.next
//         }
//     }

// }
// let stakss=new stack()
// stakss.enqueue(2)
// stakss.enqueue(3)
// stakss.enqueue(4)
// stakss.enqueue(5)
// stakss.dequeue(5)
// stakss.display()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////string revers//////////

class stack {
  constructor() {
    this.arr = [];
  }
  push(data) {
    this.arr.push(data);
  }
  pop() {
    return this.arr.pop();
  }
}

let stackarr = new stack();
let string = "irshad";
for (i = 0; i < string.length; i++) {
  stackarr.push(string[i]);
}
let reverse = "";
for (i = 0; i < string.length; i++) {
  reverse += stackarr.pop();
}
console.log(reverse);
