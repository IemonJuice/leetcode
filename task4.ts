//Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

function rotate(nums: number[], k: number): void {
    let tempArr:number[] = [];
    for(let i = 0; i < k; i++){
            let temp =  nums.pop();
            if(temp) tempArr.push(temp)
    }
    tempArr = tempArr.reverse();
    tempArr = tempArr.concat(nums)
};

// simplier solution

function rotate(nums: number[], k: number): void {
    for(let i = 0; i < k; i++){
       let temp =  nums.pop();
       nums.unshift(temp)
    }
};
