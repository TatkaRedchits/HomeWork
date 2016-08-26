function Stopwatch(element) {
    var beginTime,
    delta,
    refreshInterval,
    currentDelta = 0;

    this.flag = false;

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

    function update() {
        delta = Date.now() - beginTime + currentDelta;
        element.element.value = getTimeFromMs(delta);
    }

    this.runTimer = function() {
        this.flag = true;

        beginTime = Date.now();

        refreshInterval = setInterval(update.bind(this), 50);
    }

    this.stopTimer = function() {
        this.flag = false;
        currentDelta = delta;
        clearInterval(refreshInterval);
    }

    this.doSplit = function() {
        delta = Date.now() - beginTime + currentDelta;
        return getTimeFromMs(delta);
    }

    this.doReset = function() {
        clearInterval(refreshInterval);
        currentDelta = 0;
        element.element.value = '00:00:00.000';
    }
}