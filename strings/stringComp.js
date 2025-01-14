
var compress = function(chars) {
    let i = 0;
    let ansIndex = 0;
    while(i < chars.length) {
        let j = i+1;

        while(j < chars.length && chars[i] == chars[j]) {
            j++
        }

        chars[ansIndex] = chars[i];
        ansIndex++;

        let count = j-i;

        if(count > 1) {
            for(let ch of count.toString()) {
                chars[ansIndex] = ch;
                ansIndex++;    
            }
        }
        i = j;
    }
    return ansIndex;
    
};

chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
compress(chars)