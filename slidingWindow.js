/* 1st problem
fixed-size sliding window
comparing subarrays using windows and finding the new sum
{1, 2, 3, 4, 5, 6}
grab 123, compare to 234
123 = 6, 234 = 9,
subarray 234 isnt added together directly
it removes arr[0] and adds arr[3] frem the already added subarray
*/ 
function maxSubarraySum(arr, num){
    if (num > arr.length){
        return null;
    }
    // num refers to window size, if windowsize has more elements than the array it will null out
let maxSum = 0;
let tempSum = 0;
// initialize variable for final solution and keeping track of current total
for (let i = 0; i < num; i++){
    maxSum += arr[i];
}
// initialize the window
tempSum = maxSum;
// set sums = to each other
for (let i = num; i < arr.length; i++){
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
}
// slide the window over the array
return maxSum;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num = 3;
const maxSum = maxSubarraySum(arr, num)
console.log(maxSum) // 24, maxSum of 3 num array (7, 8, 9)
//-----------------------------------------------------------
/* variable-sized sliding window
finding the longest subarray (variable window) with a sum less than or equal to a given value
*/
let left = 0;
let right = 0;
let currentSum = 0;
let maxLength = 0;
// initializing values 
