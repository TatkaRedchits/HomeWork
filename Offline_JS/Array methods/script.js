/******* SLICE *******/

function slice(arr, begin, end) {
    var newArr = [];
    if(isNaN(begin) || begin == '') {
        begin = 0;
    }
    if (begin < 0) {
        begin = arr.length + begin;
        if (begin < 0) {
            begin = 0;
        }
    }
    if(isNaN(end) || end == '' || end > arr.length) {
        end = arr.length;
    }
    if (end < 0) {
        end = arr.length + end;
    }
    
    for (var i = begin; i < end; i++) {
        newArr.push(arr[i]);
    }
    return newArr; 
}

console.log('SLICE');
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 2));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 4));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1, 1));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1, -5));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, -2));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -4, -2));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -4, 2));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0, 2));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], '', 2));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'dth', 2));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 'dth'));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -2));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ''));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 15));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -15, 8));
console.log(slice([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15, -15));
console.log('');

/******* indexOf *******/

function indexOf(arr, value, fromIndex) {
    if (fromIndex == undefined || isNaN(fromIndex)) {
        fromIndex = 0;
    }
    if (fromIndex >= arr.length) {
        return ('-1');
    }
    if (fromIndex < 0) {
        fromIndex = arr.length + fromIndex;
    }

    for (var i = fromIndex; i < arr.length; i++) {
        if (value === arr[i]) {
            return i;
        }
    }
    return ('-1');
}

console.log('indexOf');
console.log(indexOf([5, 9, 3, 7, 45, 8946, 7, 10], 7));
console.log(indexOf([5, 9, 3, 45, 8946, 7, 10], 1));
console.log(indexOf([5, 9, 3, 45, 8946, 45, 10], 45, -3));
console.log(indexOf([5, 9, 3, 45, 8946, 7, 10], 45, 7));
console.log(indexOf([5, 9, 3, 45, 8946, 7, 10], 45, 'hbjyhvb'));
console.log(indexOf([5, 9, 3, 45, 8946, 7, 10], 45, ''));
console.log(indexOf([2, 5, 9], 9, 2));
console.log(indexOf([2, 5, 9], 2, -1));
console.log(indexOf([2, 5, 9], 2, -3));
console.log('');

/******* lastIndexOf *******/

function lastIndexOf(arr, value, fromIndex) {
    if (fromIndex == undefined || isNaN(fromIndex)) {
        fromIndex = arr.length;
    }
    if (fromIndex < 0) {
        fromIndex = arr.length + fromIndex;
    }
    for (var i = fromIndex; i >= 0; i--) {
        if (value === arr[i]) {
            return i;
        }
    }
    return ('-1');
}

console.log('lastIndexOf');
console.log(lastIndexOf([5, 9, 3, 7, 45, 8946, 7, 10], 7));
console.log(lastIndexOf([5, 9, 3, 45, 8946, 7, 10], 1));
console.log(lastIndexOf([5, 9, 3, 45, 8946, 45, 10], 45, -3));
console.log(lastIndexOf([5, 9, 3, 45, 8946, 7, 10], 45, 7));
console.log(lastIndexOf([5, 9, 3, 45, 8946, 7, 10], 45, 'hbjyhvb'));
console.log(lastIndexOf([5, 9, 3, 45, 8946, 7, 10], 45, ''));
console.log(lastIndexOf([2, 5, 9, 2], 2));
console.log(lastIndexOf([2, 5, 9, 2], 7));
console.log(lastIndexOf([2, 5, 9, 2], 2, 3));
console.log(lastIndexOf([2, 5, 9, 2], 2, 2));
console.log(lastIndexOf([2, 5, 9, 2], 2, -2));
console.log(lastIndexOf([2, 5, 9, 2], 2, -1));
console.log('');