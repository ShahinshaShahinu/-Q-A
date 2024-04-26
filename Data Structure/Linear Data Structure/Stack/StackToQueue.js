// class StackArray {
//     constructor() {
//         this.stack1 = []
//         this.stack2 = []
//         this.size = 0
//     }

//     Push(data) {
//         this.size++
//         this.stack1.push(data)
//     }
//     pop(){
//         return this.stack2.pop()
//     }
//      changetoQ(){
//         while(this.size>0){
//             this.stack1.push(this.stack2.pop())
//         }
//      }

//     display() {
//         console.log(this.stack1)
//         console.log("afterQ");
//         console.log(this.stack2);
//     }
// }
// const stacks = new StackArray()
// stacks.Push(10)
// stacks.Push(20)
// stacks.Push(40)
// stacks.Push(60)

// stacks.display()
// stacks.changetoQ()
// stacks.display()

// class StackArray {

//     constructor() {
//         this.stk1 = []
//         this.stk2 = []
//         this.size = 0

//     }

//     push(data) {
//         this.size++
//         this.stk1.push(data)
//     }
//     changeToQueue() {
//         while (this.size > 0) {
//             this.stk2.push(this.stk1.pop())
//             this.size--
//         }

//     }
//     pop(){
//         return this.stk2.pop()
//     }

//     display() {
//         console.log(this.stk1);
//         console.log('after Queue');
//         console.log(this.stk2);
//     }
// }

// const stackOne = new StackArray()

// stackOne.push(1)
// stackOne.push(222)
// stackOne.push(3333)

// //stackOne.pop()
// stackOne.display()
// stackOne.changeToQueue()
//  stackOne.pop()
// stackOne.display()

class stackarray {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
    this.size = 0;
  }

  push(data) {
    this.size++;
    this.stack1.push(data);
  }
  changeToQ() {
    while (this.size > 0) {
      this.stack2.push(this.stack1.pop());
      this.size--;
    }
  }
  pop() {
    return this.stack2.pop();
  }
  display() {
    console.log(this.stack1);
    console.log("afert ");
    console.log(this.stack2);
  }
}
let stacks = new stackarray();
stacks.push(10);
stacks.push(20);
stacks.push(30);
stacks.push(40);
stacks.display();
stacks.changeToQ();
stacks.pop();
stacks.display();
