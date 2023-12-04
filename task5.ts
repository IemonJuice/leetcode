//You are given a string num representing a large integer. An integer is good if it meets the following conditions:

//It is a substring of num with length 3.
//It consists of only one unique digit.
//Return the maximum good integer as a string or an empty string "" if no such integer exists.

//Note:

//A substring is a contiguous sequence of characters within a string.
//There may be leading zeroes in num or a good integer.

function largestGoodInteger(num: string): string {
    let max = -1;
    for(let i = 0; i < num.length-2;i++){
        let temp = num[i];
        if(num[i+1] === temp && num[i+2] === temp){
            if(Number(num[i]) > max){
               max = Number(num[i]);
            } 
        }
    }
    if(max === -1){
        return ""
    }
    return max.toString() + max.toString() + max.toString()  ;
};

//Beats 100% space complexity and 80%+ time complexity
