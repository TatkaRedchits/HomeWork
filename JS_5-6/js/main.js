var time = document.querySelector('.time');

var watch = new Stopwatch({
    element: time
});

function runTimer() {
    watch.runTimer();
    document.querySelector('.btn-start').style.display = "none";
    document.querySelector('.btn-stop').style.display = "inline-block";
}

function stopTimer() {
    watch.stopTimer();
    document.querySelector('.btn-start').style.display = "inline-block";
    document.querySelector('.btn-stop').style.display = "none";
    document.querySelector('.records').innerHTML += '<li>' + 'Stop: ' + time.value + '</li>';
}

function doSplit() {
    if(watch.flag) { 
        document.querySelector('.records').innerHTML += '<li>' + 'Split: ' + watch.doSplit() + '</li>';
    }
}

function doReset() {
    if (watch.flag) {
        document.querySelector('.btn-start').style.display = "inline-block";
        document.querySelector('.btn-stop').style.display = "none";
    }
    watch.doReset();
    document.querySelector('.records').innerHTML = '';
}