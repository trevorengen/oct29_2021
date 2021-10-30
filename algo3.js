/*  Question: Write an efficient program for printing k largest elements in an array. Elements in an array can be in any order.
    For example, if the given array is [1, 23, 12, 9, 30, 2, 50] and you are asked for the 
    largest 3 elements i.e., k = 3 then your program should print 50, 30, and 23. */

/**
 * @param {Array} arr
 * @param {number} k
 * @return {Array}
 */
function kLargestOneLine(arr, k) {
    return arr.sort((a, b) => a - b).slice(arr.length - k, arr.length).reverse().forEach(a => console.log(a));
}

kLargestOneLine([1,23,12,9,30,2,50], 3);