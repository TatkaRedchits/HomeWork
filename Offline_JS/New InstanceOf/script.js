function operatorNew(clazz, options) {
    var instance = {};
    instance.__proto__ = clazz.prototype;

    var someObject = clazz.apply(instance, options);
    if ((typeof someObject === 'object' || typeof someObject === 'function') && someObject !== null) {
        return someObject;
    }

    return instance;
}

function Test (a, b) {
    this.a = a;
    this.b = b;
    return {city: 'kharkov'};
}
var t = operatorNew(Test, ['a', 'b']);
console.log(t);

function isInstanceOf(instance, clazz) {
    if (instance === null || instance.__proto__ === null) {
        return false;
    }
    var instance = instance.__proto__
    if (instance === clazz.prototype) {
          return true;
        }
    return isInstanceOf(instance, clazz);
}

function antiPerson() {}
antiPerson.prototype.constructor = Person;
console.log(isInstanceOf(new antiPerson(), Person));
console.log(new antiPerson() instanceof Person);

function classX() {}
function classY() {}
// classX.prototype = classY.prototype;
var instX = new classX();
var instY = new classY();

console.log('is instance of classX and classY');
console.log(isInstanceOf(instX, classX)); // true
console.log(isInstanceOf(instY, classX)); // false
console.log(isInstanceOf(instX, classY)); // false
console.log(isInstanceOf(instY, classY)); // true

function Person() {};
function XXX() {};

var x = operatorNew(Person, []);

console.log('Person');

if (x instanceof Person === true) {
    console.log("GOOD");
} else {
    console.log("BADDDD");
}

if (x instanceof Object === true) {
    console.log("GOOD");
} else {
    console.log("BADDDD");
}

if (operatorNew(XXX, []) instanceof Person === false) {
    console.log("GOOD");
} else {
    console.log("BADDDD");
}

console.log(isInstanceOf(x, Person) === true);
console.log(isInstanceOf(x, Object) === true);
console.log(isInstanceOf(x, XXX) === false);