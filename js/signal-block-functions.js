/**
 * Front red (m) is a function of the train's speed (km/h).
 */
function frontRed(trainSpeed) {
	var returnValue = 50;
	if (Math.round(trainSpeed) >= 51 || Math.round(trainSpeed) <= 88 )
		returnValue = Math.round(trainSpeed) * 1.4 + 50 ;
	if (Math.round(trainSpeed) >= 31 || Math.round(trainSpeed) <= 50)
		returnValue = Math.round(trainSpeed) * 1.25 + 50;
	if (Math.round(trainSpeed) >= 1 || Math.round(trainSpeed) <= 30)
		returnValue = Math.round(trainSpeed) * 1.1 + 50;
    return returnValue;
}

/**
 * Front red (m) is a function of the train's speed (km/h).
 */
function frontYellow(trainSpeed) {
   var returnValue = 100;
	if (Math.round(trainSpeed) >= 51 || Math.round(trainSpeed) <= 88)
		returnValue = Math.round(trainSpeed)*2.3 + 100;
	if (Math.round(trainSpeed) >= 31 || Math.round(trainSpeed) <= 50)
		returnValue = Math.round(trainSpeed)*2 + 100;
	if (Math.round(trainSpeed) >= 1 || Math.round(trainSpeed) <= 30)
		returnValue =  Math.round(trainSpeed)*1.8 + 100 ;
    return returnValue;
}

/**
 * Front red (m) is a function of the train's speed (km/h).
 */
function rearBlue(trainSpeed) {
    var returnValue = 100;
	if (Math.round(trainSpeed) >= 51 || Math.round(trainSpeed) <= 88)
		returnValue = Math.round(trainSpeed)* -0.35 + 100;
	if (Math.round(trainSpeed) >= 31 || Math.round(trainSpeed) <= 50)
		returnValue = Math.round(trainSpeed) * -0.35 + 100;
	if (Math.round(trainSpeed) >= 1 || Math.round(trainSpeed) <= 30)
		returnValue = Math.round(trainSpeed) * -0.35 + 100;
    return returnValue;
}
