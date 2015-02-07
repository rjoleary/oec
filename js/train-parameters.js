/**
 * This class represents the parameters for a single train at a specific point in time.
 */
function TrainParameters(time, trainId, front, rear, track, speed, status) {
    this.time = time;
    this.trainId = trainId;
    this.front = front;
    this.rear = rear;
    this.track = track;
    this.speed = speed;
    this.status = status;
	this.frontRed = 0;
	this.frontYellow = 0;
	this.rearBlue = 0;
}
