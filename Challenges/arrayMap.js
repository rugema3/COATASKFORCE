#!/usr/bin/node

/**
 * Determines whether there exists a contiguous subarray within the given array 
 * whose elements sum up to the specified target total.
 * 
 * @param {number[]} arr - Array of numbers in which to search for the contiguous subarray.
 * @param {number} target_total - The target total that the contiguous subarray should sum up to.
 * @returns {boolean} - Returns true if there is a contiguous subarray that sums 
 *                      up to the target total, otherwise returns false.
 */
function has_contiguous_subarray_with_total(arr, target_total) {
    // Get the length of the array
    const n = arr.length;
    
    // Loop through the array
    for (let i = 0; i < n; i++) {
        // Initialize the total sum of the current contiguous subarray to 0
        let total = 0;
        
        // Loop through the array starting from the current index
        for (let j = i; j < n; j++) {
            // Add the current element to the total sum
            total += arr[j];
            
            // If the total sum matches the target total, return true
            if (total === target_total) {
                return true;
            }
        }
    }
    
    // If no contiguous subarray sums up to the target total, return false
    return false;
}
/**
 * Main function to test the usage of the has_contiguous_subarray_with_total function.
 */
function main() {
    const arr = [4, 2, 7, 1, 9, 5];
    const target_total = 17;
    response = has_contiguous_subarray_with_total(arr, target_total);
    console.log(response);
}
// Call the main function to execute the code
main();
