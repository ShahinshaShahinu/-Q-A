class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    let newnode = new node(data);
    if (this.top == null) {
      this.top = newnode;
    } else {
      newnode.next = this.top;
      this.top = newnode;
    }
  }
  pop() {
    if (this.top == null) {
      console.log("stackoverflow");
    } else {
      this.top = this.top.next;
    }
  }
  peek() {
    if (this.top == null) {
      console.log("stack underflow");
      return;
    }
    return this.top.data;
  }
  display() {
    if (this.top == null) {
      console.log("stackoverflow");
    }
    let temp = this.top;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}
let newstack = new stack();
newstack.push(10);
newstack.push(20);
newstack.push(400990);
newstack.push(50);
newstack.push(500);
newstack.push(550);
newstack.pop();
newstack.display();
console.log(newstack.peek());
