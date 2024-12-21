function bsort(hash) {
    for(let i = 0; i < hash.size; i++) {
        console.log(i);        
    }
}

var topKFrequent = function(nums, k) {
    let hash = {};
    let maxFreq = 0;
    for(i in nums) {
        if(nums[i] in hash) {
            hash[nums[i]]++;
        }else {
            hash[nums[i]] = 1;
        }
        maxFreq = Math.max(maxFreq, hash[nums[i]]);
    }
    console.log(maxFreq);
    
    const resultArr = Array.from({ length: maxFreq + 1 }, () => []);
    console.log("Initial Result Array:", resultArr);

    // Fill the frequency buckets
    for (let elem in hash) {
        const freq = hash[elem];
        resultArr[freq].push(Number(elem));
    }

    console.log("Filled Result Array:", resultArr);
    const result = [];
    for (let i = maxFreq; i > 0 && result.length < k; i--) {
        result.push(...resultArr[i]);
    }
    console.log(result);
    

    console.log("Top K Frequent Elements:", result.slice(0, k));
    return result.slice(0, k);
};

nums = [4,4,4,1,1,1,1,2,3];
k = 2;
topKFrequent(nums,k);