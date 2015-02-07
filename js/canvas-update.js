/**
 * As input, this takes an array of TrainParameters.
 * When called, this function is expected to update the canvas.
 */
 function updateCanvas(trainParameters) {
    console.log("Updating the canvas with " + JSON.stringify(trainParameters));


	var canvas = $("#myCanvas")[0];
	var c = canvas.getContext("2d");
	var wrapper = $("#wrapper");
    var height = canvas.height;
    var width = canvas.width;
    console.log("Canvas height " + height + " width " + width);

	// 1
	c.strokeRect(width*0.05, height*0.15, width*0.54, height*0.01);
	c.strokeRect(width*0.05, height*0.21, width*0.54, height*0.01);

	// 2
	c.strokeRect(width*0.40, height*0.05, width*0.01, height*0.9);
	c.strokeRect(width*0.46, height*0.05, width*0.01, height*0.9);

	// 3
	c.strokeRect(width*0.05, height*0.78, width*0.9, height*0.01);
	c.strokeRect(width*0.05, height*0.84, width*0.9, height*0.01);
}