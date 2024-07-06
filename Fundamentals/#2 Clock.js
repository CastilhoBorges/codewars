const past = function (h, m, s) {
    let miliSeconds = s * 1000; 
    let miliMinutes = m * 60000;
    let miliHours = h * 3600000; 

    return miliHours + miliMinutes + miliSeconds; 
};

console.log(past(5, 2, 1));