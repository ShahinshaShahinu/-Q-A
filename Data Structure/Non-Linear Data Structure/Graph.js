class Graph {
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
      this.addVertex(edge);
    }

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
    let visited = new Set();

    while (queue.length) {
      let current = queue.shift();
      if (visited.has(current)) {
        continue;
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
      this.graph.delete(vertex);

      for (const [key, edges] of this.graph) {
        // for (const iterator of object) {
        // }

        const index = edges.indexOf(vertex);
        if (index !== -1) {
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
