//Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

//Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.
function removeDuplicates(nums: number[]): number {
    let temp:any ={}
    let result  = [];
    for(let i = 0; i < nums.length; i++){
        temp[nums[i]] = 0;
    }
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in temp){
            temp[nums[i]] = temp[nums[i]] + 1;
        }
    }
    for(let element in temp){
        if(temp[element] === 1){
            result.push(Number(element));
        }
        if (temp[element] >= 2){
       result.push(Number(element));
           result.push(Number(element));
        }
    }
    nums = result;
    return nums.length;
};
