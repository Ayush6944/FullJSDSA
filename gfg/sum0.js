let arr = [2, 6, 1, 9, 4, 5, 3];
let counter = 1;  // Start with 1 because the first element itself counts as a subsequence
let maxCounter = 1; // To track the maximum length of consecutive subsequence

// Sort the array
arr.sort((a, b) => a - b);

for (let i = 1; i < arr.length; i++) {
    // If the current element is the same as the previous one, continue
    if (arr[i] === arr[i - 1]) {
        continue;
    }

    // If the current element is consecutive to the previous one, increment the counter
    if (arr[i] === arr[i - 1] + 1) {
        counter++;
    } else {
        // Update maxCounter if current sequence is longer
        maxCounter = Math.max(maxCounter, counter);
        counter = 1;  // Reset counter for a new sequence
    }
}

// Final update to maxCounter in case the longest sequence ends at the last element
maxCounter = Math.max(maxCounter, counter);

console.log(maxCounter); // Output the length of the longest consecutive subsequence
