var findDuplicates = function(nums) {
    let ans = 0;
    for(let i = 0; i < nums.length; i++) {
        ans = ans^nums[i]
        console.log(ans);
        
    }
    for(let i = 0; i< nums.length; i++) {
        ans = ans ^ nums[i]
    }
    console.log(ans)
};

nums = [4,3,2,7,8,2,3,1]
console.log(findDuplicates(nums))