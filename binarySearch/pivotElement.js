function pivot(nums) {
    let s = 0;
    let e = nums.length-1;
    let mid = Math.floor(s + (e-s) / 2 );

    while(s < e) {
        if(nums[mid] > nums[e]) {
            s = mid+1;
        } else {
            e = mid;
        }
        mid = Math.floor(s + (e-s) / 2 );
    }
    console.log(s);
    
}



nums = [7,9,1,3,4];
nums = [1,2,3,4,5,6,7,9]
pivot(nums)