class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertdata(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (true) {
      if (data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  contains(data) {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }

    return false;
  }

  remove(data) {
    this.reMoveHelper(data, this.root, null);
  }
  reMoveHelper(data, currentNode, parentNode) {
    while (currentNode != null) {
      if (data < currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else {
        if (currentNode.left != null && currentNode.right != null) {
          currentNode.data = this.getMinvalue(currentNode.right);
          this.reMoveHelper(currentNode.data, currentNode.right, currentNode);
        } else {
          if (parentNode == null) {
            if (currentNode.right == null) {
              this.root = currentNode.left;
            } else {
              this.root = currentNode.right;
            }
          } else {
            if (parentNode.left == currentNode) {
              if (currentNode.right == null) {
                parentNode.left = currentNode.left;
              } else {
                parentNode.left = currentNode.right;
              }
            } else {
              if (currentNode.right == null) {
                parentNode.right = currentNode.left;
              } else {
                parentNode.right = currentNode.right;
              }
            }
          }
        }
        break;
      }
    }
  }

  getMinvalue(currentNode) {
    if (currentNode.left == null) {
      return currentNode.data;
    } else {
      this.getMinvalue(currentNode.left);
    }
  }

  inOrder() {
    this.inOrderHelper(this.root);
  }
  inOrderHelper(node) {
    if (node != null) {
      this.inOrderHelper(node.left);
      console.log(node.data);
      this.inOrderHelper(node.right);
    }
  }
}

const Tree = new BinarySearchTree();

Tree.insertdata(10);
Tree.insertdata(8);
Tree.insertdata(11);
Tree.insertdata(4);
Tree.insertdata(9);
// Tree.insertdata(6);
// Tree.remove(8)
Tree.inOrder();
// console.log(Tree.contains(8));
