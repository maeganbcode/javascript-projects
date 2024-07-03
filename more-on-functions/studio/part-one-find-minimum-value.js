//1) Create a function with an array of  numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.
function findMinVal(numArr) {
    let smallestVal = numArr[0];
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] < smallestVal) {
            smallestVal = numArr[i];
        }
    }
return smallestVal;
}

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(findMinVal(nums1));
console.log(findMinVal(nums2));
console.log(findMinVal(nums3));