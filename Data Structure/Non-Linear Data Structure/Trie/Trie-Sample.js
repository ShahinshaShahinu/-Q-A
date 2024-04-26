// class TrieNode1 {
//     constructor() {
//       this.children = new Map();
//     }
//   }

//   class Trie {
//     constructor() {
//       this.root = new TrieNode1();
//       this.endSymbol = '*';
//     }

//     populateSuffixTrie(str) {
//       for (let i = 0; i < str.length; i++) {
//         this.insertSubstringStartingAt(i, str);
//       }
//     }

//     insertSubstringStartingAt(indx, str) {
//       let node = this.root;
//       for (let i = indx; i < str.length; i++) {
//         const letter = str[i];
//         if (!node.children.has(letter)) {
//           node.children.set(letter, new TrieNode1());
//         }
//         node = node.children.get(letter);
//       }
//       node.children.set(this.endSymbol, null);
//     }

//     contains(str) {
//       let node = this.root;
//       for (let i = 0; i < str.length; i++) {
//         const letter = str[i];
//         if (!node.children.has(letter)) {
//           return false;
//         }
//         node = node.children.get(letter);
//       }
//       return node.children.has(this.endSymbol);
//     }
//   }

//   const trie = new Trie();
//   trie.populateSuffixTrie('mannan');
//   console.log(trie.contains('nan'));







// class trienode{
//     constructor(){
//         this.children=new Map()
//     }
// }
//     class trie{
//      constructor(){
//         this.root=new trienode()
//         this.endsymbole="*"
//      }

//      insert(str){
//         let node=this.root
//         for(let i=0;i<str.length-1;i++){
//             let letter=str[i]
//             if(!node.children.has(letter)){
//                 node.children.set(letter,new trienode())
//             }
//             node=node.children.get(letter)
//         }
//         node.children.set(this.endsymbole,null)
//      }

//      contains(str){
//         let node=this.root
//         for(let i=0;i<str.length-1;i++){
//             let letter=str[i]
//             if(!node.children.has(letter)){
//                 return false
//             }
//             node=node.children.get(letter)
//         }
//         return node.children.has(this.endsymbole)
//      }
//     }
//     let Tries=new trie()
//     Tries.insert("irshad")
//      console.log(Tries.contains("irshad"));





class trienode{
    constructor(){
        this.children=new Map()
    }
}
class trie{
    constructor(){
        this.root=new trienode()
        this.endsymbole="*"
    }
    populateSuffixTrie(str){
        for(let i=0;i<str.length;i++){
            this.insertSubstringStartingAt(i,str)
        }
    }
    insertSubstringStartingAt(idx,str){
        let node=this.root
        for(let i=idx;i<str.length;i++){
            let letter=str[i]
            if(!node.children.has(letter)){
                node.children.set(letter,new trienode())
            }
            node=node.children.get(letter)
        }
        node.children.set(this.endsymbole,null)
    }
    contains(str){
        let node=this.root
        for(let i=0;i<str.length;i++){
            let letter=str[i]
            if(!node.children.has(letter)){
                return false
            }
            node=node.children.get(letter)
        }
        return node.children.has(this.endsymbole)
    }
}
let tries=new trie()
tries.populateSuffixTrie("irshad")
console.log(tries.contains("jgd"));