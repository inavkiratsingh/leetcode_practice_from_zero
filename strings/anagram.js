function Merge(arr, left, mid, right) {
    let n1 = mid-left+1;
    let n2 = right-mid;
    let arr1 = [];
    let arr2 = [];

    for(let i=0; i < n1; i++) {
        arr1[i] = arr[left+i];
    }

    for(let i = 0; i < n2; i++) {
        arr2[i] = arr[mid+i+1];
    }

    let i = 0;
    let j = 0;
    let k = left;

    while(i < n1 && j < n2) {
        if(arr1[i] <= arr2[j]) {
            arr[k] = arr1[i];
            i++;
            k++;
        }
        if(arr1[i] > arr2[j]) {
            arr[k] = arr2[j];
            j++;
            k++;
        }        
    }

    while (i < n1) {
        arr[k] = arr1[i];
        k++;
        i++;
    }

    while (j < n2) {
        arr[k] = arr2[j];
        k++;
        j++;
    }
}

function mergeSort(arr, left, right){    
    if(left < right) {
        let mid = Math.floor((left+right) / 2);
        
        mergeSort(arr, left, mid);
        mergeSort(arr, mid+1, right);
        
        Merge(arr, left, mid, right);
    }
}
var isAnagram = function(s, t) {
    let sArr = s.split("");
    let tArr = t.split("");
    mergeSort(sArr, 0, sArr.length-1);
    mergeSort(tArr, 0, tArr.length-1);

    s = sArr.join("");
    t = tArr.join("");
    console.log(s,t);
    
    if(s === t) {
        console.log(true);
        
        return true;
    } else {
        console.log(false);
        
        return false;
    }
};

s = "rat";
t = "car";

isAnagram(s, t);