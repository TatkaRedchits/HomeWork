/******   Calculate Kinetic Energy   *******/ 

function calculateKineticEnergy(m, v) {
    if (m < 0 || v < 0 || m == undefined || v == undefined || +m != m || +v != v) {
        return ('invalid data');
    }
    return Math.round(m * Math.pow(v, 2) / 2 * 100 ) / 100;
}

console.log('Kinetic Energy: ' + calculateKineticEnergy(1, 1.39));
console.log('Kinetic Energy: ' + calculateKineticEnergy(20, 1.96));
console.log('Kinetic Energy: ' + calculateKineticEnergy(0.75));
console.log('Kinetic Energy: ' + calculateKineticEnergy(-6, 1.1));
console.log('Kinetic Energy: ' + calculateKineticEnergy(54, 3.9));
console.log('Kinetic Energy: ' + calculateKineticEnergy(54, '3.9'));
console.log('Kinetic Energy: ' + calculateKineticEnergy(54, 'sg'));
console.log('');

/*******   Calculate Space Of Rectangle   *******/ 

function calculateSpaceOfRectangle(a, b) {
    if (a < 0 || b < 0 || a == undefined || b == undefined || +a != a || +b != b) {
        return ('invalid data');
    }
    return a * b;
}

console.log('Space Of Rectangle: ' + calculateSpaceOfRectangle(6, 10));
console.log('Space Of Rectangle: ' + calculateSpaceOfRectangle('ewdf', 5));
console.log('Space Of Rectangle: ' + calculateSpaceOfRectangle(-2, 4));
console.log('Space Of Rectangle: ' + calculateSpaceOfRectangle(4));
console.log('Space Of Rectangle: ' + calculateSpaceOfRectangle(0));
console.log('');

/*******   Calculate Space Of Circle   *******/ 

function calculateSpaceOfCircle(r) {
    if (r < 0 || r == undefined || +r != r) {
        return ('invalid data');
    }
    return Math.round(Math.PI * Math.pow(r, 2) * 100) / 100;
}

console.log('Space Of Circle: ' + calculateSpaceOfCircle(16));
console.log('Space Of Circle: ' + calculateSpaceOfCircle(0));
console.log('Space Of Circle: ' + calculateSpaceOfCircle(3.67));
console.log('Space Of Circle: ' + calculateSpaceOfCircle('3.67'));
console.log('Space Of Circle: ' + calculateSpaceOfCircle(-5));
console.log('Space Of Circle: ' + calculateSpaceOfCircle('dfas'));
console.log('');

/*******   Calculate Space Of Ellipse   *******/ 

function calculateSpaceOfEllipse(r1, r2) {
    if (r1 < 0 || r2 < 0 || r1 == undefined || r2 == undefined || +r1 != r1 || +r2 != r2) {
        return ('invalid data');
    }
    return Math.round(Math.PI * r1 * r2 * 100) / 100; 
}

console.log('Space Of Ellipse: ' + calculateSpaceOfEllipse(6, 8));
console.log('Space Of Ellipse: ' + calculateSpaceOfEllipse(19));
console.log('Space Of Ellipse: ' + calculateSpaceOfEllipse(15.85, 45.6));
console.log('Space Of Ellipse: ' + calculateSpaceOfEllipse('rtyhmj'));
console.log('Space Of Ellipse: ' + calculateSpaceOfEllipse(-84));
console.log('');

/*******   Calculate Distance Between Two Points   *******/ 

function calculateDistanceBetweenTwoPoints(x1, y1, x2, y2) {
    if (x1 == undefined || y1 == undefined || x2 == undefined || y2 == undefined || +x1 != x1 || +y1 != y1 || +x2 != x2 || +y2 != y2) {
        return ('invalid data');
    }
    return Math.round(Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)) * 100) / 100;
}

console.log('Distance Between Two Points: ' + calculateDistanceBetweenTwoPoints(-1, 3, 6, 2));
console.log('Distance Between Two Points: ' + calculateDistanceBetweenTwoPoints(-1.85, 3.75, 0, -6));
console.log('Distance Between Two Points: ' + calculateDistanceBetweenTwoPoints('-1.85', '3.75', 0, '-6'));
console.log('Distance Between Two Points: ' + calculateDistanceBetweenTwoPoints('-1.85', 'oif', 0, '-6'));
console.log('Distance Between Two Points: ' + calculateDistanceBetweenTwoPoints(3, 6, 2));
console.log('');

/*******   Calculate Profit   *******/ 

function calculateProfit(arr) {
    var profit = 0;
    for (var i = 0; i < arr.length; ++i) {
        if (isNaN(arr[i])) {
            return ('invalid data');
        }
        profit += Number(arr[i]);
    }
    return profit;
}

console.log('Profit: ' + calculateProfit([10, 5, 20, 15]));
console.log('Profit: ' + calculateProfit([-250, 680, 0, 950]));
console.log('Profit: ' + calculateProfit(['-9000', 9000, -10000]));
console.log('Profit: ' + calculateProfit(['okmo', 9000, -10000]));
console.log('');

/*******   Calculate Falling Time   *******/ 

function calculateFallingTime(h) {
    const G = 9.8;
    if (h < 0 || +h != h) {
        return ("It's not a height!");
    }
    if (h == 0) {
        return ('Climb higher!');
    }
    return Math.round(Math.sqrt(2 * h / G) * 10) / 10;
}

console.log('Falling Time: ' + calculateFallingTime(5000));
console.log('Falling Time: ' + calculateFallingTime(0));
console.log('Falling Time: ' + calculateFallingTime('300'));
console.log('Falling Time: ' + calculateFallingTime(-5));
console.log('Falling Time: ' + calculateFallingTime('dfh'));
console.log('');