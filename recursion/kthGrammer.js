//? This code is correct functionally but if you observe the grammer meaning observation skills then you should optimize it more

// const generateGrammer = (row, index, newString) =>{
//     if(index === row.length) {
//         return newString;
//     }

//     if(row[index] === "0"){
//         newString = newString.concat("01");
//     } else if( row[index] === "1") {
//         newString = newString.concat("10");
//     }

//     return generateGrammer(row, index+1, newString)
// }

// var kthGrammar = function(n, k) {
//     let rows = ["0"]
//     for(let i = 0; i < n-1; i++) {
//         rows[i+1] = generateGrammer(rows[i], 0, "")
//     }
//     console.log(rows, rows[n-1][k-1]);
// };

// kthGrammar(2,2)


//? Hun video dekhi aa mai te optimize krn lgga dekho bnda code ya nhi

var kthGrammar = function(n, k) {
    if(n == 1 && k == 1) {
        return 0;
    }
    let mid = Math.floor(Math.pow(2, n-1)/2);

    if(k <= mid) {
        return kthGrammar(n-1, k);
    } else {
        return +!kthGrammar(n-1, k-mid);
    }

};

console.log(kthGrammar(2,2));

