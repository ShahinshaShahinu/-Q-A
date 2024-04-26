class minheap {
  heap = new Array();

  constructor(arr) {
    this.buildheap(arr);
  }

  buildheap(arr) {
    this.heap = arr;
    for (let i = Math.floor(this.parent(this.heap.length - 1)); i >= 0; i--) {
      this.shiftdown(i);
    }
  }

  shiftdown(currentind) {
    let leftind = this.leftchild(currentind);
    let endind = this.heap.length - 1;
    while (leftind <= endind) {
      let rightind = this.rightchild(currentind);
      let indexToshift;
      if (rightind <= endind && this.heap[rightind] <= this.heap[leftind]) {
        indexToshift = rightind;
      } else {
        indexToshift = leftind;
      }
      if (this.heap[currentind] > this.heap[indexToshift]) {
        [this.heap[currentind], this.heap[indexToshift]] = [
          this.heap[indexToshift],
          this.heap[currentind],
        ];
        currentind = indexToshift;
        leftind = this.leftchild(currentind);
      } else {
        return;
      }
    }
  }

  shiftup(currentind) {
    let parentind = parseInt(this.parent(currentind));
    while (currentind > 0 && this.heap[parentind] > this.heap[currentind]) {
      [this.heap[currentind], this.heap[parentind]] = [
        this.heap[parentind],
        this.heap[currentind],
      ];
      currentind = parentind;
      parentind = this.parent(currentind);
    }
  }

  delete() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    this.heap.pop();
    this.shiftdown(0);
  }

  display() {
    for (let i = 0; i < this.heap.length; i++) {
      console.log(this.heap[i]);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.shiftup(this.heap.length - 1);
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  leftchild(i) {
    return 2 * i + 1;
  }

  rightchild(i) {
    return 2 * i + 2;
  }
}

let arr = [6, 2, 8];
let Heaps = new minheap(arr);

Heaps.display();
