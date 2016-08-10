function operatorNew(clazz, options) {
    var exemplar = Object.create(clazz.prototype);
    clazz.apply(exemplar, options);

    return exemplar;
}

function isInstanceOf(instance, clazz) {
    if (instance === null) {
        return false;
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