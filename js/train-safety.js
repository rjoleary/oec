/**
 * Analyze the array of train parameters and create sends commands to the server.
 */
function applySafety(trainParameters) {
    console.log("Applying train safety...");
	var cmd = [];
	for (var i = 0; i < trainParameters.length; i++) {
		for (var j = i + 1; j < trainParameters.length; j++) {
			if (i != j && trainParameters[i].track === trainParameters[j].track){
                var front;
                var back;
				if (trainParameters[i].rear > trainParameters[j].front){
					front = trainParameters[i];
					back = trainParameters[j];
				} else {
					front = trainParameters[j];
					back = trainParameters[i];
				}
                var SIGNAL_BLOCK_SIZE = 75;
				front.frontRed = frontRed(front.speed);
				front.frontYellow = frontYellow(front.speed);
				front.rearBlue = rearBlue(front.speed);
				back.frontRed = frontRed(back.speed);
				back.frontYellow = frontYellow(back.speed);
				back.rearBlue = rearBlue(back.speed);
                // We performed numerical analysis and determined the upper bound for floating-point error is 0.05.
                if ((front.rear * SIGNAL_BLOCK_SIZE - front.rearBlue) + 0.05 < (back.front * SIGNAL_BLOCK_SIZE + back.frontRed)) {
					cmd.push(back.trainId + ' Stop');
                }
				else if ((front.rear * SIGNAL_BLOCK_SIZE - front.rearBlue) + 0.05 < (back.front * SIGNAL_BLOCK_SIZE + back.frontYellow)) {
				    cmd.push(back.trainId + ' Slow Down');
                }
			}
		}
	}
    for (var i = 0; i < cmd.length; i++) {
        console.log('Commands:' + cmd);
        alert(cmd[i]);
    }
}
