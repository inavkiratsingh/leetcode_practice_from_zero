var containsDuplicate = function(nums) {
    let set = new Set();
    for(let i in nums) {
        if(set.has(nums[i])){
            return true;
        } else {
            set.add(nums[i]);
        }
    }
    return false;
};

nums = [1,2,3,1]
containsDuplicate(nums)