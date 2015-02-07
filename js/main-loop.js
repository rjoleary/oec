/**
 * The simulation starts automatically at the start of the loop.
 */
$(function () {
    var TIME_INTERVAL = 500; // half a second
    
    var time = 0;
    setInterval(function () {
        var trainParameters = getTrainParameters(time);
        
        // Only continue if there are new train parameters.
        if (trainParameters && trainParameters.length > 0) {
            updateCanvas(trainParameters);
            applySafety(trainParameters);
        }
        
        // Increment the time for the next interval.
        time++;
    }, TIME_INTERVAL);
});
