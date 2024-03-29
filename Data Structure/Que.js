class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class queue {
  constructor() {
    this.rear = null;
    this.front = null;
  }

  enqueue(data) {
    let newnode = new node(data);
    if (this.rear == null) {
      this.rear = this.front = newnode;
      return;
    }
    this.rear.next = newnode;
    // this.rear=newnode
  }
  dequeue() {
    if (this.front == null) {
      console.log("empty");
      return;
    }
    this.front = this.front.next;
    if (this.front == null) {
      this.rear = null;
    }
  }
  display() {
    let current = this.front;
    if (this.front == null) {
      console.log("empty");
      return;
    }
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
}
let newqueue = new queue();
newqueue.enqueue(10);
newqueue.enqueue(22);
newqueue.enqueue(33);
newqueue.dequeue();
newqueue.display();
