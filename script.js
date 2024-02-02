function calculateMinCost() {
    // Fetching the input value and converting it into an array of integers
    var inputText = document.getElementById("rope-lengths").value;
    var ropeLengths = inputText.split(',').map(Number);

    // Sorting the array of rope lengths in ascending order
    ropeLengths.sort(function(a, b) {
        return a - b;
    });

    var totalCost = 0;

    // Iterating through the sorted array and calculating the total cost
    while (ropeLengths.length > 1) {
        var min1 = ropeLengths.shift();
        var min2 = ropeLengths.shift();

        var currentCost = min1 + min2;

        // Adding the current cost to the total cost and inserting the new rope length back into the array
        totalCost += currentCost;
        ropeLengths.push(currentCost);

        // Re-sorting the array after adding the new rope length
        ropeLengths.sort(function(a, b) {
            return a - b;
        });
    }

    // Displaying the result in the HTML div with id="result"
    document.getElementById("result").innerHTML = "Minimum Cost: " + totalCost;
}