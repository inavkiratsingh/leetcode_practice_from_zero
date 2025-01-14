// var CaseChange = (result, ip, op) => {
//     if(ip.length == 0) {
//         result.push(op);
//         return;
//     }

//     let op1 = op + ip[0].toUpperCase();
//     let op2 = op + ip[0].toLowerCase();
//     console.log(op1,op2);

//     ip = ip.slice(1);

//     CaseChange(result, ip, op2);
//     CaseChange(result, ip, op1);
// }

// let result = [];
// CaseChange(result, "abc", "");
// console.log(result);


//? Leetcode problem where numbers are also included

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {


    function Case(result, ip, op) {
        if(ip.length == 0) {
            result.push(op);
            return;
        }

        if(ip[0].toLowerCase() !== ip[0].toUpperCase()) {
            let op1 = op + ip[0].toLowerCase();
            let op2 = op + ip[0].toUpperCase();
            ip = ip.slice(1);
            Case(result, ip, op1);
            Case(result, ip, op2);
        }else {
            op = op + ip[0];
            ip = ip.slice(1);
            Case(result, ip, op)
        }
        return;
    }
    let result = [];
    Case(result, s, "");
    return result;
};