// TODO: If i come here i will for sure make this a better then this 

var moveZeroes = function(nums) {
    let j = nums.length-1;
    let i = nums.length-1;
    while ( i >= 0 ) {
        if(nums[i] === 0) {
            for(let k = i; k < j; k++){
                nums[k] = nums[k+1]
            }
            nums[j] = 0
            j--;
        }
        i--;
    }
    console.log(nums);
    
};

nums = [0,1,0,3,12]
moveZeroes(nums)