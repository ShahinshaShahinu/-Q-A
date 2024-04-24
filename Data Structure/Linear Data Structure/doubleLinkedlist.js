class Nodes {
  constructor(datas) {
    this.datas = datas;
    this.next = null;
    this.prev = null;
  }
}

class dobleLinkedLists {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNewNode(datas) {
    const NewNode = new Nodes(datas);

    if (this.head == null) {
      this.head = NewNode;
    } else {
      this.tail.next = NewNode;
      NewNode.prev = this.tail;
    }

    this.tail = NewNode;
  }

  display() {
    let tempp = this.head;

    while (tempp != null) {
      console.log(tempp.datas);
      tempp = tempp.next;
    }
  }

  riverseDisplay() {
    let temp = this.tail;

    while (temp != null) {
      console.log(temp.datas);
      temp = temp.prev;
    }
  }
}

const listNodes = new dobleLinkedLists();

listNodes.addNewNode(20);
listNodes.addNewNode(30);
listNodes.addNewNode(55);

listNodes.display();
console.log("Reverse Node Given Below");
listNodes.riverseDisplay();
