var uniqueOccurrences = function(arr) {
    let map = {}
    let result = {}
    for(i in arr) {
        if(arr[i] in map) {
            map[arr[i]]++;
        }else {
            map[arr[i]] = 1;
        }
    }
    for(let i of Object.keys(map)){
        if(map[i] in result) {
            result[map[i]].push(i)
        }else {
            result[map[i]] = [i]
        }
        
        if(result[map[i]].length > 1){
            return false           
        }
        
    }
    return true
};

arr = [-3,0,1,-3,1,1,1,-3,10,0,0]
uniqueOccurrences(arr)


//? we can also match the length of map with frequencies stored in set this is also correct

var uniqueOccurrences = function(arr) {
    let map = {};
    for (let num of arr) {
        map[num] = (map[num] || 0) + 1; // Count occurrences
    }

    let frequencies = new Set(Object.values(map)); // Collect unique frequencies

    // If the size of the set matches the number of unique keys, return true
    return frequencies.size === Object.values(map).length;
};

// Test case
let arr = [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0, 0,0,0];
console.log(uniqueOccurrences(arr)); // Output: true
