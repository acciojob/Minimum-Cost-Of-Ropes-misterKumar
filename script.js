function calculateMinCost() {
  // Get the input and validate it
  const input = document.querySelector('#rope-lengths').value;
  if (!input) {
    alert('Please enter a valid input!');
    return;
  }
  const ropeLengths = input.split(',').map(Number);
  if (ropeLengths.some(isNaN)) {
    alert('Please enter a valid input!');
    return;
  }

  // Connect the ropes with minimum length
  const pq = new MinHeap(ropeLengths);
  let totalCost = 0;
  while (pq.size() > 1) {
    const sum = pq.extractMin() + pq.extractMin();
    totalCost += sum;
    pq.insert(sum);
  }

  // Print the minimum cost to the result div
  const resultDiv = document.querySelector('#result');
  resultDiv.innerHTML = `Minimum cost of connecting ropes: ${totalCost}`;
}

class MinHeap {
  constructor(arr) {
    this.heap = [null];
    for (const x of arr) {
      this.insert(x);
    }
  }

  insert(x) {
    this.heap.push(x);
    let i = this.heap.length - 1;
    while (i > 1 && this.heap[i] < this.heap[Math.floor(i / 2)]) {
      [this.heap[i], this.heap[Math.floor(i / 2)]] = [this.heap[Math.floor(i / 2)], this.heap[i]];
      i = Math.floor(i / 2);
    }
  }

  extractMin() {
    if (this.heap.length <= 1) {
      return null;
    }
    const min = this.heap[1];
    this.heap[1] = this.heap.pop();
    let i = 1;
    while (i * 2 < this.heap.length) {
      const left = i * 2;
      const right = i * 2 + 1;
      const child = right < this.heap.length && this.heap[right] < this.heap[left] ? right : left;
      if (this.heap[child] >= this.heap[i]) {
        break;
      }
      [this.heap[i], this.heap[child]] = [this.heap[child], this.heap[i]];
      i = child;
    }
    return min;
  }

  size() {
    return this.heap.length - 1;
  }
}
