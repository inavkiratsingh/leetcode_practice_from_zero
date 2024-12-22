var subarraySum = function(nums, k) {
    let count = 0;
    for(let st = 0; st < nums.length; st++) {
        let currentSum = 0;
        for(let end = st; end < nums.length; end++) {
            currentSum += nums[end];
            if( currentSum === k ) {
                count++;
            }
        }
    }
    console.log(count);
    return count;
};

nums = [1,-1,0], k = 0
subarraySum(nums,k);