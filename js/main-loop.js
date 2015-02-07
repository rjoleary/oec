/**
 * The simulation starts automatically at the start of the loop.
 */
$(function () {
    var TIME_INTERVAL = 15; // half a second
    
    var time = 0;
    setInterval(function () {
        var trainParameters = getTrainParameters(time);
        if (trainParameters) {
            updateCanvas(trainParameters);
            applySafety(trainParameters);
        }
        
        // Increment the time for the next interval.
        time++;
    }, TIME_INTERVAL);
});
