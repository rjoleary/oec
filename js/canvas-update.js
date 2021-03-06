var ctx = $("#myCanvas");
var c = ctx[0].getContext("2d");
var wrapper = $("#wrapper");
var value;

/**
* Parse the data for individual train
* and return x, y, width, and height parameters
*/
function parseLocToCoor(front, rear, track, height, width) {
	var x, y, w, h;
	if (track == "1E") {
		x = width*(0.05 + (rear-1101)*0.54/200);
		y = height*0.15;
		w = height*0.01;
		h = height*0.05;
		loc="1-"+ (front-1000).toString();
	} else if (track == "1W") {
		x = width*(0.59 - (front-1501)*0.54/200);
		y = height*0.30;
		w = height*0.01;
		h = height*0.05;
		loc="1-"+ (front-1000).toString();
	} else if (track == "2S") {
		x = width*0.45;
		y = height*(0.05 + (rear-2501)*0.9/(20000/75));
		w = width*0.05;
		h = height*0.01;
		loc="2-"+ (front-2000).toString();
	} else if (track == "2N") {
		x = width*0.30;
		y = height*(0.95 - (front-2101)*0.9/(20000/75));
		w = width*0.05;
		h = height*0.01;
		loc="2-"+ (front-2000).toString();
	} else if (track == "3E") {
		x = width*(0.05 + (rear-3101)*0.9/(25000/75));
		y = height*0.69;
		w = height*0.01;
		h = height*0.05;
		loc="3-"+ (front-3000).toString();
	} else if (track == "3W") {
		x = width*(0.95 - (front-3501)*0.9/(25000/75));
		y = height*0.84;
		w = height*0.01;
		h = height*0.05;
		loc="3-"+ (front-3000).toString();
	}
	return [x, y, w, h, loc];
}

/**
 * As input, this takes an array of TrainParameters.
 * When called, this function is expected to update the canvas.
 */
function updateCanvas(trainParameters) {
	var size = trainParameters.length;
	console.log("Updating the canvas with " + JSON.stringify(trainParameters));

	var height = ctx[0].height;
	var width = ctx[0].width;
	console.log("Canvas height " + height + " width " + width);

	// Clear
	c.clearRect(0, 0, width, height);

	// Track 1
	c.strokeRect(width*0.05, height*0.15, width*0.54, height*0.05);
	c.strokeRect(width*0.05, height*0.30, width*0.54, height*0.05);
	c.fillText("--->", width*0.05, height*0.175);
	c.fillText("<---", width*0.58, height*0.325);

	// Track 2
	c.strokeRect(width*0.30, height*0.05, width*0.05, height*0.9);
	c.strokeRect(width*0.45, height*0.05, width*0.05, height*0.9);
	c.fillText("|", width*0.475, height*0.06);
	c.fillText("|", width*0.475, height*0.07);
	c.fillText("V", width*0.474, height*0.08);
	c.fillText("^", width*0.3245, height*0.93);
	c.fillText("|", width*0.325, height*0.94);
	c.fillText("|", width*0.325, height*0.95);

	// Track 3
	c.strokeRect(width*0.05, height*0.69, width*0.9, height*0.05);
	c.strokeRect(width*0.05, height*0.84, width*0.9, height*0.05);
	c.fillText("--->", width*0.05, height*0.715);
	c.fillText("<---", width*0.94, height*0.865);


	for(i=0; i<size; ++i) {
		var arr = parseLocToCoor(parseInt(trainParameters[i]["front"]), parseInt(trainParameters[i]["rear"]), trainParameters[i]["track"], height, width);
		c.fillStyle = 'green';
		console.log(arr);
		c.fillRect(arr[0], arr[1], arr[2], arr[3]);

		c.fillStyle = 'black';
		c.fillText(trainParameters[i]["trainId"], arr[0], arr[1]);

		if (trainParameters[i]["trainId"] == value) {
			console.log(111);
			$("#location").text(arr[4]);
			$("#speed").text(trainParameters[i]["speed"]);
			$("#state").text(trainParameters[i]["status"]);
		}
	}

	var zoom = 0;
	$('#trainidsubmit').on('click', function() {
		value = $('#t-id').val();
	});

	for(i=0; i<size; ++i) {
		
	}

	$( "#zoom" ).click(function() {
	 	++zoom;
	 	if (zoom % 2 != 0) {
	 		$("canvas").css("transform", "scale(2,2)");
	 	}
	 	else {
	 		$("canvas").css("transform", "scale(1,1)");
	 	}
	});
}