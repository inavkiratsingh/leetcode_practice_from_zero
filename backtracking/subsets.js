var subsets = function(nums) {
    let result = [[]]
    function updateResult(nums, index) {
        if(index >= nums.length) {
            return
        }
        let currentNumber = nums[index]
        let sub = [];
        for(let subsets of result) {
            sub.push([...subsets, currentNumber])
        }
        result.push(...sub)
        updateResult(nums, index+1)
    }
    updateResult(nums,0)
    console.log(result);
    
};

nums = [1,2,3];
subsets(nums);