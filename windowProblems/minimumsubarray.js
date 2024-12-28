//? this is brute force technique

// var minSubArrayLen = function(target, nums) {
//     let subarrayCount = Infinity;
//     let Sum = 0;
//     for(let start = 0; start <= nums.length; start++ ) {
//         Sum = 0;
//         for(let end = start; end <= nums.length; end++){
//             Sum += nums[end];
//             if(Sum >= target) {
//                 subarrayCount = Math.min(subarrayCount, end-start+1)
//             }
//         }
        
//     }

//     console.log(subarrayCount);
    
// };

//? Now i want to optimize it
var minSubArrayLen = function(target, nums) {
    let window = 0;
    let left = 0;
    let result = Infinity;

    for( let right = 0; right < nums.length; right++ ) {
        window += nums[right];
        while (window >= target) {
            result = Math.min(result, right-left+1);
            window -= nums[left];
            left ++;
        }
    }

    return result===Infinity ? 0 : result;
    
};

target = 4, nums = [1,4,4]
minSubArrayLen(target, nums)