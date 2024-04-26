// stack using arary

class stackARR {
  constructor() {
    this.item = [];
  }

  push(data) {
    this.item.push(data);
  }
  pop() {
    return this.item.pop();
  }
  Peek() {
    return this.item[this.item.length - 1];
  }
  isEmpty() {
    return this.item.length == 0;
  }
  size() {
    return this.item.length;
  }

  print() {
    console.log(this.item.toString());
  }
  display() {
    if (this.isEmpty()) {
      console.log("Stack is empty");
      return;
    }
    console.log("Stack elements:");
    for (let i = this.item.length - 1; i >= 0; i--) {
      console.log(this.item[i]);
    }
  }
}

const arStack = new stackARR();

arStack.push(1);
arStack.push(2);
arStack.push(3);
arStack.push(4);
arStack.push(5);
console.log(arStack.isEmpty());
arStack.print();
// console.log(arStack.size());
console.log(arStack.Peek());
arStack.pop();
arStack.pop();
arStack.pop();
arStack.print();

arStack.display();
