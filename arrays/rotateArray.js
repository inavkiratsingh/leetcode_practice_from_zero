var rotate = function(nums, k) {
    let temp = new Array(nums.length).fill(0);
    console.log(temp);
    for(let i = 0; i < nums.length; i++) {
        temp[(i+k)%nums.length] = nums[i]
    }

    nums = Array.from(temp)
    

};

nums = [1,2,3,4,5,6,7], k = 3
rotate(nums, k)