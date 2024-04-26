class node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addnode(data) {
    let newNode = new node(data);

    if (this.head == null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }
  deleteLastNode() {
    let temp = this.head;

    while (temp.next !== this.tail) {
      temp = temp.next;
    }
    temp.next = null;
    this.tail = temp;
    console.log(temp);
  }
  sum(){
    let sum=0;
    let current =this.head;
    while(current){
      sum =sum+current.data;
      current=current.next
    }
        console.log("sum", sum);

  }

  display() {
    if (this.head == null) {
      console.log("Empty");
    }
    let temp = this.head;

    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

let list = new LinkedList();
list.addnode(10);
list.addnode(20);
list.addnode(30);
list.addnode(90);
list.deleteLastNode();list.sum()
list.display();
