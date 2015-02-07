var factor = 50;

$( document ).ready(function() {
	

	var ctx = $("#myCanvas");
	var c = ctx[0].getContext("2d");
	var wrapper = $("#wrapper");
	var height = $(window).height()*0.95;
	var width = height*1.25;

	ctx.attr("height", height);
	ctx.attr("width", width);

	// 1
	c.strokeRect(width*0.05, height*0.15, width*0.54, height*0.01);
	c.strokeRect(width*0.05, height*0.21, width*0.54, height*0.01);

	// 2
	c.strokeRect(width*0.40, height*0.05, width*0.01, height*0.9);
	c.strokeRect(width*0.46, height*0.05, width*0.01, height*0.9);

	// 3
	c.strokeRect(width*0.05, height*0.78, width*0.9, height*0.01);
	c.strokeRect(width*0.05, height*0.84, width*0.9, height*0.01);
});