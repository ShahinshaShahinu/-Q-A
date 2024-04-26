const readline = require('readline-sync')

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  isEmpty() {
    return this.size === 0
  }
  getSize() {
    return this.size
  }
  addData(data) {
    const node = new Node(data)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }

  deleteFromLast() {
    let curr = this.head
    let prev
    while (curr.next != null) {
      prev = curr
      curr = curr.next
    }
    this.tail = prev
    this.tail.next = null
  }

  insertFromLast(data) {
    const node = new Node(data)
    this.tail.next = node
    this.tail = node
    this.size++
  }

  insertFromFirst(data) {
    const node = new Node(data)
    node.next = this.head
    this.head = node
    this.size++
  }

  insertValue(data, pos) {
    let curr = this.head
    let prev
    if (curr.data == pos) {
      const node = new Node(data)
      this.head = node
      this.head.next = curr
      return
    }
    while (curr != null && curr.data != pos) {
      prev = curr
      curr = curr.next
    }
    if (curr == null) return
    if (this.tail == curr) {
      const node = new Node(data)
      node.next = this.tail
      prev.next = node
    }
    const node = new Node(data)
    prev.next = node
    node.next = curr
    this.size++
  }

  deleteFromFirst() {
    this.head = this.head.next
  }

  deleteValue(value) {

    let curr = this.head
    let prev

    if (curr.data == value) {
      this.head = this.head.next
      return
    }
    while (curr != null && curr.data != value) {
      prev = curr
      curr = curr.next
    }
    if (curr == null) return
    if (this.tail == curr) this.tail = prev
    prev.next = curr.next
  }

  display() {
    if (this.isEmpty()) {
      console.log("list is empty")
      console.log(this.getSize())
    } else {
      let curr = this.head
      let values = ''
      while (curr) {
        values += `${curr.data} `
        curr = curr.next
      }
      console.log(values)
    }
  }
}

const list = new LinkedList()

const num = readline.question("Enter the count: ")
for (let index = 0; index < num; index++) {
  const data = readline.question(`Enter the ${index + 1} value: `)
  if (data === '') index--
  else list.addData(data)
}
list.display()


// const agree = readline.question('you want to delete from last Enter yes or no !')
// if (agree == 'yes') {
//   list.deleteFromLast()
//   list.display()
// } else {
//   console.log('delete cancelled')
// }

// const agr = readline.question('you want to delete from first Enter yes or no !')
// if (agr == 'yes') {
//   list.deleteFromFirst()
//   list.display()
// } else {
//   console.log('delete cancelled')
// }

// const agre = readline.question('you want to delete any element yes or no !')
// if (agre == 'yes') {
//   const value = readline.question('Enter the value:')
//   list.deleteValue(value)
//   list.display()
// } else {
//   console.log('delete cancelled')
// }

// const are = readline.question('you want to insert from last Enter yes or no !')
// if (are == 'yes') {
//   const data = readline.question('Enter the value:')
//   list.insertFromLast(data)
//   list.display()
// } else {
//   console.log('delete cancelled')
// }

// const ar = readline.question('you want to insert from first Enter yes or no !')
// if (ar == 'yes') {
//   const data = readline.question('Enter the value:')
//   list.insertFromFirst(data)
//   list.display()
// } else {
//   console.log('delete cancelled')
// }

const ag = readline.question('you want to insert before any element yes or no !')
if (ag == 'yes') {
  const data = readline.question('Enter the value:')
  const pos = readline.question('Enter the data:')
  list.insertValue(data, pos)
  list.display()
} else {
  console.log('delete cancelled')
}

const arr = [1,2,3,4,5,6,7,8,9,0]

for(i=0;i<arr.length;i++){
  list.addData(arr[i])
}
list.display()