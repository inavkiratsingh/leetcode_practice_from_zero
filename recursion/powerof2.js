var isPowerOfTwo = function(n) {
    if (n <= 0) return false;  // A non-positive number can't be a power of two

    while (n % 2 === 0) {      // Check if the number is divisible by 2
        n = n / 2;             // Divide the number by 2
    }
    return n === 1; 
};

isPowerOfTwo(16);