//?  technique to get all subarrays

// var maxSubArray = function(nums) {
//     let sub = [];
//     for(let st = 0; st < nums.length; st++) {
//         for(let end = st; end < nums.length; end++) {
//             for(let i = st; i <= end; i++) {
//                 sub.push(nums[i])
//             }
//             console.log(sub);
//             sub = []
//         }
//     }
// };


//? trying to get maximum subarray sum ( brute force technique ) with little optimization

// var maxSubArray = function(nums) {
//     let maxSum = Number.MIN_SAFE_INTEGER;
//     for(let st = 0; st < nums.length; st++) {
//         let currentSum = 0;
//         for(let end = st; end < nums.length; end++) {
//             currentSum += nums[end];
//             maxSum = Math.max(currentSum, maxSum);
//         }
//     }
//     console.log(maxSum);
    
// };


//? now understand and implement kadanes algorithm

var maxSubArray = function(nums) {
    let currentSum = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < nums.length; i++) {
        currentSum +=  nums[i];
        maxSum = Math.max(currentSum, maxSum);
        
        if(currentSum < 0) {
            currentSum = 0;
        }
    }
    console.log(maxSum);
    
};

nums = [-2,-1,-3,-1,-1,-2,-1,-5,-1];
maxSubArray(nums);