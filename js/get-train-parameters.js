/**
 * Returns an array of train parameters for the given time.
 */
window.getTrainParameters = (function () {
    // Get the simulation data from the server.
    var simulationData = [];
    $.get('/Testing.txt', function(rawData) {
        var lines = rawData.split('\n');
        lines.splice(0, 1); // Remove header row
        $.each(lines, function () {
            // Regex splits lines into tokens.
            var tokens = this.replace(/^\s+|\s+$/g, '').split(/\s+/);
            if (tokens.length == 7) {
                simulationData.push(tokens);
            }
        });
    });
    
    return function (time) {
        var trainParameters = [];
        $.each(simulationData, function () {
            if (this[0] == time) {
                trainParameters.push(new TrainParameters(this[0], this[1], this[2], this[3], this[4], this[5], this[6]));
            }
        });
        return trainParameters;
    };
})();
