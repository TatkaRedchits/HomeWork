var a = prompt('Please enter your number');
var n = prompt('Enter power');

function power (a, n) {
    if (a == '' || n == '' || isNaN(a) || isNaN(n)) {
        return console.log('NaN');
    }
    if (n % 1 != 0) {
        return console.log(powerFrac (a, n));
    } 
    if (n == 0) {
        console.log(1);
    } else if (n > 0) {
        console.log(powerNat (a, n));
    } else {
        console.log(powerNeg (a, n));
    }
}

function powerNat (a, n) {
    var result = 1;
    for (var i = 0; i < n; i++) {
        result *= a;
    }
    return result; 
}

function powerNeg (a, n) {
    return 1 / powerNat(a, -n);
}

function powerFrac (a, n) {
    return Math.exp(n * Math.log(a));
}

power (a, n);
