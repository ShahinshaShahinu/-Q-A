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
      if (!this.graph.get(edge).includes(vertex)) {
        this.graph.get(edge).push(vertex);
      }
    }
  }

  deletevertex(vertex) {
    if (this.graph.has(vertex)) {
      this.graph.delete(vertex);
      // for (const iterator of object) {
      // }

      for (const [key, edge] of this.graph) {
        let index = edge.indexOf(vertex);
        if (index != -1) {
          edge.splice(index, 1);
        }
      }
    }
  }

  deleteEdge(vertex1, vertex2) {
    if (this.graph.has(vertex1) && this.graph.has(vertex2)) {
      const edge1 = this.graph.get(vertex1);
      const edge2 = this.graph.get(vertex2);

      const index1 = edge1.indexOf(vertex1);
      const index2 = edge2.indexOf(vertex2);

      if (index1 !== -1) {
        edge1.splice(index1, 1);
      }
      if (index2 !== -1) {
        edge2.splice(index2, 1);
      }
    }
  }

  bfs(start) {
    //beadth first search //
    // using to Queue mathod  , because Q is  a lenear , forward to traverse ,
    if (!this.graph.has(start)) {
      return new Set(); // Return an empty set if the start vertex doesn't exist in the graph
    }

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

  dfs(start) {
    // depth first search  // using stack method because is depthly search ..
    let visited = new Set();
    if (!this.graph.has(start)) {
      return null;
    }

    let stack = [start];

    while (stack.length) {
      let current = stack.pop();
      if (visited.has(current)) {
        continue;
      }
      visited.add(current);

      for (const edge of this.graph.get(current)) {
        stack.push(edge);
      }
    }

    return visited;
  }
  // whar t bsus js
  display() {
    console.log(this.graph);

    let graphString = "";

    this.graph.forEach((edge, vertex) => {
      graphString += `${vertex}: ${edge.join(" ")}\n`;
    });

    console.log(graphString);
  }
}

const gr = new Graph();

gr.addVertex(3);
gr.addVertex(5);
gr.insert(5, 3, true);

gr.display();

gr.deletevertex(3);

gr.display();
console.log("fffffffff");
console.log(gr.bfs(5));

console.log(gr.dfs(5));
