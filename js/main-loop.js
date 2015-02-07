/**
 * The simulation starts automatically at the start of the loop.
 */
$(function () {
    var TIME_INTERVAL = 500; // half a second
    
    setTimeout(function () {
        var trainParameters = getTrainParameters();
        if (data) {
            updateCanvas(trainParameters);
            applySafety(trainParameters);
        }
    }, TIME_INTERVAL);
});