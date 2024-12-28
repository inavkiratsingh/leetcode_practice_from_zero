var longestSubstring = function(s, k) {
    let i = 0;
    let j = i+1;
    let count = 1;
    while( j < s.length ){
        if(s[i] === s[j]){
            console.log(s[i], s[j]);
            
            count++;
            j++;
            continue;
        }
        i = j;
        j++;
    }
    console.log(count);
    
};

s = "aaabb", k = 2
longestSubstring(s, k);