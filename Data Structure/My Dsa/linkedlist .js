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
    const ar = [];
    while (temp != null) {
      ar.push(temp.data);
      temp = temp.next;
    }

    for (let i = ar.length - 1; i >= 0; i--) {
      console.log(ar[i]);
    }
  }
}

const list = new linkedlist();

list.addNode(12);
list.addNode(1);
list.addNode(2);
list.addNode(0);

list.display();
