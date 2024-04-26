//Single Linked List //

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedlist {
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
  }

  display() {
    let temp = this.head;

    while (temp != null) {
      console.log(temp.data);

      temp = temp.next;
    }
  }
}

const list = new linkedlist();

list.addNode(10);

list.addNode(3);

list.display();


