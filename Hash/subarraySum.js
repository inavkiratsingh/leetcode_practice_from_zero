//? Brute force approach with O(n^2) TC

// var subarraySum = function(nums, k) {
//     let count = 0;
//     for(let st = 0; st < nums.length; st++) {
//         let currentSum = 0;
//         for(let end = st; end < nums.length; end++) {
//             currentSum += nums[end];
//             if( currentSum === k ) {
//                 count++;
//             }
//         }
//     }
//     console.log(count);
//     return count;
// };


//? Optimal approach with approximate O(n) TC
var subarraySum = function (nums, k) {
    let count = 0;
    let prefixSum = [];
    prefixSum[0] = nums[0];
    let map = {};
    for(let i = 1; i<nums.length; i++) {
        prefixSum[i] = prefixSum[i-1] + nums[i];
    }
    
    for(let j = 0; j < nums.length; j++) {
        if(prefixSum[j] === k) {
            count++
        }
        let chechElem = prefixSum[j] - k;
        
        
        if(chechElem in map) {
            count += map[chechElem];
        }

        if(!(prefixSum[j] in map)) {
            map[prefixSum[j]] = 0
        }
        map[prefixSum[j]]++
        
    }
    return count
    
}
nums = [9,4,0,20,3,10,5], k = 33
subarraySum(nums,k);