//? I try to solve like this but this solution always give false output in leetcode i don't know why may be because it is written in problem description that time complexity is O(1)

// var reverseString = function(s) {
//     let rev = [];
//     for(let i = s.length-1; i >= 0; i--) {        
//         rev.push(s[i]);
//     }
//     console.log(rev);    
// };

//? Now I am using the two pointer technique

var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;
    let temp;
    while(left < right || left == right) {
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
        console.log(s);
    }
}

s = ["h","e","l","l","o"];
reverseString(s);
