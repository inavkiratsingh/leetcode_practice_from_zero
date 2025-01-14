//? Previous code was different one but i don't know that one is correct or not but this is more comfortable code

var peakIndexInMountainArray = function(arr) {
    let start = 0;
    let end = arr.length - 1;

    let mid = Math.floor(start + ((end - start) / 2));

    while( start < end ) {
        if (arr[mid] < arr[mid+1]) {
            start = mid + 1;
        } else {
            end = mid;
        }
        mid = Math.floor(start + ((end - start) / 2));
    }

    return start;
};