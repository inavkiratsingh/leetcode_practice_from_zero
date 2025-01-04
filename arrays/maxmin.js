const maximum = (arr, index, max) => {
    if(index == arr.length) {
        return max
    }
    
    max = Math.max(max, arr[index]);
    // max = Math.min(max, arr[index]);
    
    return maximum(arr, index+1, max);
}

let max = Infinity;
max = maximum([2,5,6,2,3,9,1,2], 0, max);
console.log(max);
