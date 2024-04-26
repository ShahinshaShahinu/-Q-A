class node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class binary {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newnode = new node(data);
    let current = this.root;
    if (current == null) {
      this.root = newnode;
      return;
    }
    while (true) {
      if (data < current.data) {
        if (current.left == null) {
          current.left = newnode;
          break;
        } else {
          current = current.left;
        }
      } else {
        if (current.right == null) {
          current.right = newnode;
          break;
        } else {
          current = current.right;
        }
      }
    }
  }

  inorder() {
    this.inorderhelper(this.root);
  }
  inorderhelper(node) {
    if (node != null) {
      this.inorderhelper(node.left);
      console.log(node.data);
      this.inorderhelper(node.right);
    }
  }
}
let newbinary = new binary();
newbinary.insert(2);
newbinary.insert(3);
newbinary.insert(6);
newbinary.insert(4);
newbinary.inorder();
