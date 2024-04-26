class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(data) {
    const newNode = new Node(data);

    if (this.front == null) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (this.front == null) {
      console.log("queue is empty");
    } else {
      this.front = this.front.next;
      if (this.front == null) {
        this.rear = null;
      }
    }
  }

  display() {
    let current = this.front;

    if (this.front == null) {
      console.log("empty ");
      return;
    }

    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

queue.display();

queue.dequeue();
console.log("ddddddddddddd");
queue.display();
