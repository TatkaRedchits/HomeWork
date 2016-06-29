function createBase(n) {
    var people = [];
    for (i = 0; i < n;  i++) {
        people[i] = prompt('Enter name ' + (i + 1));
    }
    return people;
}

function loginCheck (base, logName) {
    if (logName == '') {
         return false;
    } 
    for (i = 0; i < base.length; i++) {
        if (base[i] == logName) {
            return true;
        }
    }
    return false;
}

var base = createBase(5);
var logName = prompt('Enter user name');

if (loginCheck (base, logName)) {
    alert('Hello ' + logName);
} else {
    alert('There is not user with this login');
}
