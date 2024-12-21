function Merge(s, left, mid, right) {
    let n1 = mid - left + 1;
    let n2 = right - mid;
    let arr1 = [];
    let arr2 = [];

    for( let i = 0; i < n1; i++) {
        arr1[i] = s[left+i];
    }

    for(let i = 0; i < n2; i++) {
        arr2[i] = s[mid+i+1];
    }

    let i = 0;
    let j = 0;
    let k = left;

    while ( i < n1 && j < n2 ) {
        if(arr1[i] <= arr2[j]){
            s[k] = arr1[i];
            i++;
            k++;
        } else {
            s[k] = arr2[j];
            j++;
            k++;
        }
    }

    while (i < n1) {
        s[k] = arr1[i];
        i++;
        k++;
    }

    while (j < n2) {
        s[k] = arr2[j];
        j++;
        k++;
    }

}

function mergeSort(s,left, right) {
    if( left < right ) {
        let mid = Math.floor((left+right)/2);
        mergeSort(s, left, mid);
        mergeSort(s, mid+1, right);
        Merge(s, left, mid, right);
    }
}
var groupAnagrams = function(strs) {
    let result = {};
    for(let index in strs) {
        let s = strs[index].split("");
        mergeSort(s, 0, s.length-1);
        s = s.join("");
        if(s in result) {
            result[s] = [...result[s], strs[index]];
        }else {
            result[s] = [strs[index]];
        }
    }
    console.log(Object.values(result));
    
    return Object.values(result);
    
};

strs = ["a"];

groupAnagrams(strs);