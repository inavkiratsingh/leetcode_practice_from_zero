var isPalindrome = function(s) {
    function isLetter(char) {
        return /^[a-z0-9]$/.test(char);
    }
    s = s.toLowerCase();
    
    let start = 0;
    let end = s.length-1;

    

    while(start < end) {
        if(!isLetter(s[start])){
            console.log("start");
            
            start++;
            continue
        }
        if(!isLetter(s[end])){
            console.log("end");
            
            end--;
            continue
        }
        if(s[start] === s[end]) {
            result = true;
        }
        start++;
        end--;
    }
    
    console.log(result);
    
    
};

// s = " "
// s = ".,"
s = "a.b,."
isPalindrome(s)