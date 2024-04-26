class TrieNode {
  constructor() {
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
    this.endsymbol = "*";
  }

  insert(str) {
    let node = this.root;
    for (let i = 0; i < str.length; i++) {
      if (!node.children.has(str[i])) {
        node.children.set(str[i], new TrieNode());
      }
      node = node.children.get(str[i]);
    }
    node.children.set(this.endsymbol, null);
  }

  contains(str) {
    let node = this.root;
    for (let i = 0; i < str.length; i++) {
      let letter = str[i];
      if (!node.children.has(letter)) {
        return false;
      }
      node = node.children.get(letter);
    }
    return node.children.has(this.endsymbol);
  }
}

let tries = new Trie();
tries.insert("irshad");

console.log(tries.contains("irshad"));
