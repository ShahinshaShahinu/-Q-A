//circular Linked List //

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Circular {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(data) {
    const NewNode = new Node(data);

    if (this.head == null) {
      this.head = NewNode;
    } else {
      this.tail.next = NewNode;
    }

    this.tail = NewNode;
    this.tail.next = this.head;
  }

  display() {
    if (this.head === null) {
      console.log("Circular linked list is empty.");
      return;
    }

    let temp = this.head;
    do {
      console.log(temp.data);
      temp = temp.next;
    } while (temp !== this.head);
  }
}

const list = new Circular();

list.addNode(10);

list.addNode(3);

list.display();
