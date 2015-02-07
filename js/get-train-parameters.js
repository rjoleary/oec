/**
 * Returns an array of train parameters for the given time.
 */
function getTrainParameters(time) {
    var simulationData = getSimulationData();
    var trainParameters = [];
    $.each(simulationData, function () {
        if (this[0] == time) {
            trainParameters.push(new TrainParameters(this[0], this[1], this[2], this[3], this[4], this[5], this[6]));
        }
    });
    return trainParameters;
}
