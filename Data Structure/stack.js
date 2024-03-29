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
      console.log("stack underflow");
      return;
    }
    this.top = this.top.next;
  }
  display() {
    let temp = this.top;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}
let newstack = new stack();
newstack.push(2);
newstack.push(4);
newstack.push(5);
newstack.push(9);
newstack.pop();
newstack.display();
