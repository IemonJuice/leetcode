//Given an array arr and a chunk size size, return a chunked array.
//A chunked array contains the original elements in arr, but consists of subarrays each of length size.
//The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

var chunk = function(arr, size) {
    let chunk = [];
    let newArray = [];

    if (arr.length === 0)
        return [];

    for (let i = 0; i < arr.length; i++) {
        chunk.push(arr[i]);

        if (chunk.length === size || i === arr.length - 1) {
            newArray.push(chunk);
            chunk = [];
        }
    }
    return newArray
};
