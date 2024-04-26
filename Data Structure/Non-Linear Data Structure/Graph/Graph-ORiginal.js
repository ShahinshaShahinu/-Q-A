class Graph {
  //GRAPH IMPLIMENT TO USING HASHTABLE //
  constructor() {
    this.graph = new Map();
  }
  addVertex(data) {
    this.graph.set(data, new Array());
  }
  insert(vertex, edge, isBi = false) {
    if (!this.graph.has(vertex)) {
      this.addVertex(vertex);
    }
    if (!this.graph.has(edge)) {
      // the value and array created  ..arrayList ..
      this.addVertex(edge);
    }
    //  /The includes() function is a method available for arrays in JavaScript.
    // It is used to check whether an array includes a specific element and returns true if the element is found, and false otherwise.
    if (!this.graph.get(vertex).includes(edge)) {
      this.graph.get(vertex).push(edge);
    }
    if (isBi) {
      //biDirection //
      if (!this.graph.get(edge).includes(vertex)) {
        this.graph.get(edge).push(vertex);
      }
    }
  }

  dfs(start) {
    let visited = new Set();
    // Set is a built-in object that allows you to store unique values of any type. It represents a collection of distinct elements,

    let stack = [start];

    while (stack.length) {
      let current = stack.pop();

      if (visited.has(current)) {
        continue;
      }

      visited.add(current);

      for (let neighbor of this.adjList.get(current)) {
        stack.push(neighbor);
      }
    }

    return visited;
  }

  bfs(start) {
    let queue = [start];
    //set only taken uniqueue elements//
    let visited = new Set();
    while (queue.length) {
      let current = queue.shift();
      if (visited.has(current)) {
        continue;
        //  loop and move on to the next iteration.
      }
      visited.add(current);
      for (const edge of this.graph.get(current)) {
        queue.push(edge);
      }
    }

    return visited;
  }

  deleteVertex(vertex) {
    if (this.graph.has(vertex)) {
      //The delete() method is a built-in method provided by the Map object in JavaScript.
      // It is used to remove a key-value pair from the map,
      this.graph.delete(vertex);

      //  the loop will iterate over each element in the numbers array, and the number variable will take the value of each element in each iteration.
      for (const [key, edges] of this.graph) {
        // for (const iterator of object) {
        // }
        //If the element is not found, the returned index will be -1.
        const index = edges.indexOf(vertex);
        if (index !== -1) {
          //number of elements to be removed ,which index we have to remove
          edges.splice(index, 1);
        }
      }
    }
  }

  deleteEdge(vertex1, vertex2) {
    if (this.graph.has(vertex1) && this.graph.has(vertex2)) {
      const edges1 = this.graph.get(vertex1);
      const edges2 = this.graph.get(vertex2);
      const index1 = edges1.indexOf(vertex2);
      const index2 = edges2.indexOf(vertex1);
      if (index1 !== -1) {
        edges1.splice(index1, 1);
      }

      //it is only remove the edges ,
      if (index2 !== -1) {
        edges2.splice(index2, 1);
      }
    }
  }
  display() {
    // console.log(this.graph);

    console.log(this.graph);

    let graphString = "";
    g.graph.forEach((neighbors, vertex) => {
      graphString += `${vertex}: ${neighbors.join(",")}\n`;
    });

    console.log(graphString);
  }
}

let g = new Graph();
g.insert(10, 433, true);
g.insert(6, 7, 3, true);
g.insert(1, 3, true);

g.insert(3, 5);
g.insert(5, 3);

// console.log('ffffff');
// g.deleteVertex(3)
g.deleteEdge(3, 5);
g.display();
g.bfs(6);
