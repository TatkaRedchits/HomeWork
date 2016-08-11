function operatorNew(clazz, options) {
    var instance = {};
    instance.__proto__ = clazz.prototype;
    clazz.apply(instance, options);

    return instance;
}

function isInstanceOf(instance, clazz) {
    if (instance === null || instance.__proto__ === null) {
        return false;
    }

    if (instance.__proto__.constructor === clazz) {
        return true;
    }

    var instanceProto = Object.getPrototypeOf(instance);

    var comparisonResult = instanceProto === clazz.prototype;
    if (!comparisonResult) {
        return isInstanceOf(instanceProto, clazz);
    }
    return comparisonResult;
}

function Person() {};
function XXX() {};

var x = operatorNew(Person, []);

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