class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.Top = null;
  }

  push(data) {
    const newNode = new Node(data);

    if (this.Top == null) {
      this.Top = newNode;
    } else {
      newNode.next = this.Top;
      this.Top = newNode;
    }
  }

  pop() {
    if (this.Top == null) {
      console.log("stack Underflow");
      // stack overflow means exceeded maximum size of stack

      return;
    } else {
      this.Top = this.Top.next;
    }
  }
  display() {
    let current = this.Top;

    while (current != null) {
      console.log(current.data + "  ");

      current = current.next;
    }
  }
}

const stack = new Stack();

stack.push(99);
stack.push(33);
stack.pop();
stack.display();
