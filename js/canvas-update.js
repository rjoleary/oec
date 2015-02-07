var ctx = $("#myCanvas");
var c = ctx[0].getContext("2d");
var wrapper = $("#wrapper");
var height = $(window).height()*0.95;
var width = height*1.25;

function parseLocToCoor(front, rear, track) {
	var x, y, w, h;
	if (track == "1E") {
		x = width*(0.05 + (rear-1101)*0.54/200);
		y = height*0.15;
		w = height*0.01;
		h = height*0.05;
	} else if (track == "1W") {
		x = width*(0.59 - (front-1501)*0.54/200);
		y = height*0.30;
		w = height*0.01;
		h = height*0.05;
	} else if (track == "2S") {
		x = width*0.45;
		y = height*(0.05 + (rear-2501)*0.9/(20000/75));
		w = width*0.05;
		h = height*0.01;
	} else if (track == "2N") {
		x = width*0.30;
		y = height*(0.95 - (front-2101)*0.9/(20000/75));
		w = width*0.05;
		h = height*0.01;
	} else if (track == "3E") {
		x = width*(0.05 + (rear-3101)*0.9/(25000/75));
		y = height*0.69;
		w = height*0.01;
		h = height*0.05;
	} else if (track == "3W") {
		x = width*(0.95 - (front-3501)*0.9/(25000/75));
		y = height*0.84;
		w = height*0.01;
		h = height*0.05;
	}
	return [x, y, w, h];
}

/**
 * As input, this takes an array of TrainParameters.
 * When called, this function is expected to update the canvas.
 */
 function updateCanvas(trainParameters) {
 	var size = trainParameters.length;
 	if (!size) {
 		return;
 	}
    console.log("Updating the canvas with " + JSON.stringify(trainParameters));

	ratio = width*0.9*25000;

	ctx.attr("height", height);
	ctx.attr("width", width);

	// 1
	c.strokeRect(width*0.05, height*0.15, width*0.54, height*0.05);
	c.strokeRect(width*0.05, height*0.30, width*0.54, height*0.05);

	// 2
	c.strokeRect(width*0.30, height*0.05, width*0.05, height*0.9);
	c.strokeRect(width*0.45, height*0.05, width*0.05, height*0.9);

	// 3
	c.strokeRect(width*0.05, height*0.69, width*0.9, height*0.05);
	c.strokeRect(width*0.05, height*0.84, width*0.9, height*0.05);

	// c.fillRect(width*0.10, height*0.212, height*0.006, height*0.006);

	// console.log(trainParameters[0]["trainId"]);

	for(i=0; i<size; ++i) {
		// console.log(trainParameters[i]["trainId"]);
		var arr = parseLocToCoor(parseInt(trainParameters[i]["front"]), parseInt(trainParameters[i]["rear"]), trainParameters[i]["track"]);
		c.fillStyle = 'green';
		// c.fillRect(width*0.10, height*0.15, height*0.01, height*0.05);
		console.log(arr);
		c.fillRect(arr[0], arr[1], arr[2], arr[3]);

		// c.fillStyle = 'red';
		// c.fillText('10010', width*0.09, height*0.17);
	}
}