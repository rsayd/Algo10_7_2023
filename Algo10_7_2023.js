/* 
    This is an actual interview algorithm given to a Coding Dojo alum

    Find Consecutive Sums

    You are given arr, a list of positive integers 0-255
    You are given k, a integer between 1-255

    Find all the consecutive groups of integers that add up to the value k
*/

// inputs:
k = 16
arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

output = [
    [2, 5, 3, 6],
    [3, 6, 7], //  3, 6, 7 appear consecutively, so they are included in the solution
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0]
]

// create new arrays
// if no matches, return empty array

// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take a few mins to write the pseudocode first:
// create the function and decide what params it needs and what it will return here:




const consectutiveSum = (arr, k) => {
    let result = [] // variable to store the output
    //loop through the array elements
    for (let i = 0; i < arr.length - 1; i++) {
        let current_sum = arr[0]; //resetting variables for each itteration of the loop 
        let current_group = [];

        for (let j = i; j < arr.length - 1; j++) {   //inner loop to find consecutive sums starting from index i
            current_sum += arr[j]
            current_group.push(arr[j])
            if (current_sum === k) { //if the current sum equals k, add the current group to the results 
                result.push([...current_group]);
            }
            if (current_sum > k) { //tell loop to break and restart after one group is pushed
                break;
            }

        }
    }
    return result      //return result
}