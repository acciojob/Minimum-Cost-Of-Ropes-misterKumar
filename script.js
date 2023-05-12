
function minCostOfRopes(lengths) {
  // Convert the input string to an array of integers
  const ropes = lengths.split(',').map(str => parseInt(str.trim()));
  
  // Initialize a priority queue with the lengths of the ropes
  const pq = new PriorityQueue();
  ropes.forEach(len => pq.enqueue(len));
  
  // Merge ropes until only one remains in the queue
  let cost = 0;
  while (pq.size() > 1) {
    const len1 = pq.dequeue();
    const len2 = pq.dequeue();
    const mergedLen = len1 + len2;
    cost += mergedLen;
    pq.enqueue(mergedLen);
  }
  
  // Return the total cost of merging the ropes
  return cost;
}

// A simple priority queue implementation using an array
class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  
  enqueue(item) {
    this.queue.push(item);
    this.queue.sort((a, b) => b - a);
  }
  
  dequeue() {
    return this.queue.pop();
  }
  
  size() {
    return this.queue.length;
  }
}
