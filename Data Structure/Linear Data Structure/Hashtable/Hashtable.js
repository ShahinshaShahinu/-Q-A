class Hashtable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  has(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    let index = this.has(key);
    if (!this.table[index]) {
      this.table[index] = value;
    } else {
      let i = index + (1 % this.size);
      while (i != index && this.table[i]) {
        i = i + (1 % this.size);
      }
      this.table[i] = value;
    }
  }
  get(key) {
    let index = this.has(key);
    return this.table[index];
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}
let newhash = new Hashtable(50);
newhash.set("name", "irshad");
newhash.set("age", "20");
newhash.set("place", "alike");
newhash.display();
console.log(newhash.get("place"));
