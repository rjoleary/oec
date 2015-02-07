/**
 * Returns an array of train parameters for the given time.
 */
window.getTrainParameters = (function () {
    // Get the simulation data from the simulation data.
    var simulationData = getSimulationData();
    
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
