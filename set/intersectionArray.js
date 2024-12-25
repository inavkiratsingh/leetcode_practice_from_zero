// var intersection = function(nums1, nums2) {
//     let set = new Set();
//     for(let i in nums1) {
//         for(let j in nums2) {
//             if(nums1[i] == nums2[j]) {
//                 set.add(nums1[i]);
//             }
//         }
//     }
//     console.log(set);
    
//     let arr = Array.from(set)
//     console.log(arr);
    
    
// };

//? hash table
var intersection = function(nums1, nums2) {
    let set = new Set();
    let map = {};
    

    for( let i in nums1 ) {
        if(nums1[i] in map){
            map[nums1[i]]++;
        }else {
            map[nums1[i]] = 1;
        }
    }

    for( let j in nums2 ) {
        if(nums2[j] in map) {
            set.add(nums2[j]);
        }
    }
    
    return Array.from(set);
    
};

nums1 = [1,2,2,1], nums2 = [2,2]
intersection(nums1, nums2);