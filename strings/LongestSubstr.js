//? time comp - O(n^3)

// var lengthOfLongestSubstring = function(s) {
//     let n = s.length;
//     let length = 0;
//     let currlength;
//     for(let st = 0; st < n; st++) {
        
        
//         for(let end = st; end < n; end++) {
//             let mapping = {};
//             currlength = 0;
//             for(let i = st; i <= end; i++){
                
//                 if(s[i] in mapping){
//                     mapping[s[i]]++;
//                 }else {
//                     mapping[s[i]] = 1
//                 }
//             }
            
//             Object.keys(mapping).map((key) => {
//                 if(mapping[key] == 1){
//                     currlength++;
//                 }
//             });
//             console.log("start - ", st, " end - ", end, "mapp = ", mapping, currlength);
//             length = Math.max(currlength, length);
//         }
        
//     }

//     console.log(length);
    
// };


//? a little optimization fron n^3 to n^2

// var lengthOfLongestSubstring = function(s) {
//     let n = s.length;
//     let length = 0;
//     let currlength;
//     for(let st = 0; st < n; st++) {
//         let mapping = {}
//         currlength = 0;
//         for(let end = st; end < n; end++) {
//             if(s[end] in mapping){
//                 break;
//             }else {
//                 mapping[s[end]] = 1
//                 currlength++;
//             }

//         }
//         // console.log("start - ", st, " end - ", end, "mapp = ", mapping, currlength);
//         length = Math.max(currlength, length);
        
//     }

//     console.log(length);
    
// };

//?  i want to O(n)

var lengthOfLongestSubstring = function(s) {
    
    let n = s.length;
    let left = 0;
    let right = 0;
    let map = {}
    let maxLength = 0;
    
    while( right < n ) {
        if(s[right] in map && map[s[right]] >= left) {
            left = map[s[right]]+1;
        }
        maxLength = Math.max(maxLength, (right-left+1));
        map[s[right]] = right;
        right++;
        
        console.log(maxLength, left, right)
    }
    
    console.log(maxLength);
    
};

s = "tmmzuxt";
lengthOfLongestSubstring(s)

