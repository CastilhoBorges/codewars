const binaryArrayToNumber = (arr) => {
    dec = 0;
    for (let i = 0; i < arr.length; i++) {
        dec = dec + Math.pow(2, i) * arr[arr.length - i - 1]
    }
    return dec;
};

console.log(binaryArrayToNumber([1, 0, 1, 1, 0, 1]));
