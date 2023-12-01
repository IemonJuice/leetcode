//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

//Merge nums1 and nums2 into a single array sorted in non-decreasing order.

//The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
for(let i = 0,j= 0; i < nums1.length; i++){
    if(nums1[i] === 0 && i >= m){
        nums1[i] = nums2[j];
        j++;
    }
}
function swap(array:number[], firstIndex:number, lastIndex:number) {
    [array[firstIndex], array[lastIndex]] = [array[lastIndex], array[firstIndex]];
}

function pivot(array:number[], pivotIndex = 0, endIndex = array.length - 1) {
    let swapIndex = pivotIndex;
    for(let i = pivotIndex + 1; i <= endIndex; i++) {
        if(array[i] < array[pivotIndex]){
            swapIndex++;
            swap(array, swapIndex, i);
        }
    }
    swap(array, pivotIndex, swapIndex)

    return swapIndex;
}

function quickSort(array:number[],left=0,right=array.length-1){
    if(left < right) {
        let pivotIndex = pivot(array, left, right);
        quickSort(array, left, pivotIndex-1);
        quickSort(array, pivotIndex+1,  right);
    }
    return array;
}
nums1 = quickSort(nums1);
};
