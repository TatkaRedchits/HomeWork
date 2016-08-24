var time = document.querySelector('.time'),
beginTime,
delta,
refreshInterval,
currentDelta = 0,
flag = false;

function format(num, maxNumbers) {
  var numStr = num + '';
  while(numStr.length < maxNumbers) {
    numStr = '0' + numStr;
  }
  return numStr;
}

function getTimeFromMs(ms) {
    var hours = Math.floor(ms / 3600000);

    ms = ms - hours * 3600000;
    var mins = Math.floor(ms / 60000);

    ms = ms - mins * 60000;
    var secs = Math.floor(ms / 1000);

    ms = ms - secs * 1000;

    return format(hours, 2) + ':' + format(mins, 2) + ':' + format(secs, 2) + '.' +  format(ms, 3);
}

function runTimer() {
  flag = true;

  beginTime = Date.now();
  
  refreshInterval = setInterval(function() {
    delta = Date.now() - beginTime + currentDelta;
    time.value = getTimeFromMs(delta);
  }, 50);

  document.querySelector('.btn-start').style.display = "none";
  document.querySelector('.btn-stop').style.display = "inline-block";
}

function stopTimer() {
  flag = false;
  currentDelta = delta;
  clearInterval(refreshInterval);
  document.querySelector('.btn-start').style.display = "inline-block";
  document.querySelector('.btn-stop').style.display = "none";
  document.querySelector('.records').innerHTML += '<li>' + 'Stop: ' + time.value + '</li>';
}

function doSplit() {
  if (flag) {
    document.querySelector('.records').innerHTML += '<li>' + 'Split: ' + time.value + '</li>';
  }
}

function doReset() {
  stopTimer();
  time.value = '00:00:00.000';
  document.querySelector('.records').innerHTML = '';
}