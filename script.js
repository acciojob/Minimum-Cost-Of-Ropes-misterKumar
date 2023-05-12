 
function calculateMinCost() {
  const ropeLengths = document.querySelector('#rope-lengths').value.split(',').map(Number);

  // Sort the rope lengths in non-decreasing order
  ropeLengths.sort((a, b) => a - b);

  let totalCost = 0;

  // Connect the ropes with minimum length
  while (ropeLengths.length > 1) {
    const sum = ropeLengths[0] + ropeLengths[1];
    totalCost += sum;

    // Replace the first two ropes with their sum
    ropeLengths.splice(0, 2, sum);

    // Re-sort the rope lengths array
    ropeLengths.sort((a, b) => a - b);
  }

  // Print the minimum cost to the result div
  const resultDiv = document.querySelector('#result');
  resultDiv.innerHTML = `Minimum cost of connecting ropes: ${totalCost}`;
}

