class QueueAr {
  constructor() {
    this.item = [];
  }

  enqueue(data) {
    this.item.push(data);
  }

  dequeue() {
    this.item.shift();
  }
  addFirst(f) {
    this.item.unshift(f);
  }
  reMoveFirst() {
    this.item.shift();
  }
  display() {
    console.log(this.item);
  }
  print() {
    console.log(this.item.toString());
  }
}

var list = new QueueAr();
list.enqueue(1);
list.enqueue(2);
list.enqueue(3);
list.enqueue(4);
list.dequeue();
// list.addFirst(55)
list.display();
// list.removefirst()
list.print();
