// function maximumSum(nums, k) {
//     let subCount = 0;
    
//     for( let start = 0; start < nums.length; start++ ) {
//         let sum = 0;
//         for( let end = start; end < nums.length; end++ ){
//             sum += nums[end];
//             if(sum === k) {
//                 subCount = Math.max(subCount, end-start+1);
//             }
//         }
//     }

//     console.log(subCount);
    
// }

function maximumSum( nums, k ) {
    let subCount = 0;
    let curSum = 0;
    let prefixSum = [];
    let map = {}
    for(let i = 0; i < nums.length; i++) {
        curSum += nums[i];
        console.log(curSum);
        
        prefixSum[i] = curSum;
        console.log(prefixSum);
        
        if(!(prefixSum[i] in map)) {
            map[prefixSum[i]] = i
        } 
        if(curSum === k) {
            subCount = Math.max(subCount, i+1);
        }
        if(curSum-k in map) {
            subCount = Math.max(subCount, i-map[curSum-k]);
        }
        console.log(map, "\n\n");
        
    }

    // console.log(map, prefixSum, subCount);
    
}

nums = [1, -1, 5, -2, 3], k = 3
maximumSum(nums, k)