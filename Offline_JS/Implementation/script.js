/*******  ASSIGN  *******/

function assign(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
}

console.log('assign');
console.log(assign({}, {a:7}));

var o1 = {a: 1};
var o2 = {a: 4, b: 2, c: 1};
var o3 = {c: 3};
console.log('copy:');
console.log(assign(o1, o2, o3));
console.log('o1:');
console.log(o1);

var o1 = {a: 'somthing'};
var o2 = null;
var o3 = undefined;
console.log('copy:');
console.log(assign(o1, o2, o3));
console.log('o1:');
console.log(o1);

var obj = Object.create({ foo: 1 }, 
    { bar: {
        value: 2
    },
    baz: {
        value: 3,
        enumerable: true
    }
});

var copy = assign({}, obj);
console.log(copy);
console.log('');

/*******  toFixed  *******/

(1).__proto__.toFixed = function(digits) {
    if (digits < 0 || digits > 20 || +digits !== digits) {
        return 'Digits argument must be between 0 and 20';
    }

    var str = this.toString();
    var dotIndex = str.indexOf('.');
    var intact = str;
    var fraction = '';

    
    if (dotIndex !== -1) {
        intact = str.slice(0, dotIndex);
        fraction = str.slice(dotIndex + 1);
    }

    if (digits === 0 || digits === undefined) {
        return intact;
    }

    intact += '.';
    
    for (var i = 0; i < digits; i++) {
        if (fraction[i] === undefined) {
            intact += 0;
            continue;
        }
        if (i == digits - 1) {
            if (fraction[digits] >= 5) {
                intact += (+fraction[i] + 1);
                continue;
            } 
        }
        intact += fraction[i];
    }
    return intact; 
}

console.log('toFixed');
console.log((709).toFixed(2));
console.log((709.25).toFixed(0));
console.log((709.546262).toFixed(3));
console.log((709.286262).toFixed(2));
console.log((709.546262).toFixed());
console.log((709.46565).toFixed(1));
console.log((709).toFixed(22));
console.log((-709).toFixed(2));
console.log((709.296262).toFixed(2));
console.log('');

/*******  FORMAT CURRENCY  *******/

(2).__proto__.formatCurrency = function() {

    var incomingСurrency = this.toFixed(2);
    var dotIndex = incomingСurrency.indexOf('.');
    var main = incomingСurrency.slice(0, dotIndex);
    var minusIndex = incomingСurrency.indexOf('-');

    if (minusIndex !== -1) {
        var main = incomingСurrency.slice(minusIndex + 1, dotIndex);
    }
    
    var change = incomingСurrency.slice(dotIndex);
    var mainWithThousand = '';

    for (var i = 0; i < main.length; i++) {
        if ((main.length - i) % 3 === 0 && i !== 0) {
            mainWithThousand += ',' + main[i];
        } else {
            mainWithThousand += main[i];
        }
    }

    var currency = '$' + mainWithThousand + change;

    if (minusIndex !== -1) {
        currency = '-' + currency;
    }
    return currency;
}

console.log('formatCurrency');
console.log((5.5).formatCurrency() === "$5.50");
console.log((1005.5).formatCurrency() === "$1,005.50");
console.log((0).formatCurrency() === "$0.00");
console.log((-1).formatCurrency() === "-$1.00");
console.log('');

/*******  heartJoin  *******/

[].__proto__.heartJoin = function() {
    var strHeart = '';
    for (var i = 0; i < this.length; i++) {
        if (i != this.length - 1) {
            strHeart += this[i]  + '❤';
        } else {
            strHeart += this[i];
        }        
    }

    return strHeart;
}

console.log('heartJoin');
console.log([].heartJoin() === '');
console.log([1,2,3].heartJoin() === "1❤2❤3");
console.log(['sergii', 'javascript'].heartJoin() === "sergii❤javascript");
console.log(['vasya', 'tanya'].heartJoin() === "vasya❤tanya");
console.log(['миша', 'маша','сережа'].heartJoin() === "миша❤маша❤сережа");
console.log(["",0,3,5,""].heartJoin() === "❤0❤3❤5❤");
console.log('');

/*******  balance  *******/

[].__proto__.balance = function() {
    var balance = {};
    for (i = 0; i < this.length; i++) {
        for (var key in this[i]) {
            if (balance.hasOwnProperty(key)) {
                balance[key] += this[i][key];
            } else {
                balance[key] = this[i][key];
            }
        }
    }
    return balance;
}

console.log('balance');
console.log([{in:0, out:0}].balance());
console.log([{in:1, out:-1}, {in:100, out: 100}].balance());
console.log([{in:100, out:100500}, {in:-100}].balance());