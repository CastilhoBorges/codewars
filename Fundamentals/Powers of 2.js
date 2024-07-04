function powersOfTwo(n) {
    let arr = []
    while(n >= 0) {
        arr.unshift(2 ** n);
        n--;
    }
    return arr;
}

console.log(powersOfTwo(10));