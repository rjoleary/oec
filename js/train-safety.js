function applySafety(trainParameters) {
	var cmd = "running" ;
	var arrayLength = trainParameters.length;
	for (var i = 0; i < arrayLength; i++){
		for (var j = 0; i < arrayLength; i++){
			var front ;
			var back ;
			if(i!=j){
				if(trainParameters[i].rear > trainParameters[j].front){
					front = trainParameters[i] ;
					back = trainParameters[j] ;
				}
				else if(trainParameters[i].rear < trainParameters[j].front){
					front = trainParameters[j] ;
					back = trainParameters[i] ;
				}
				front.frontRed = frontRed(front.speed);
				front.frontYellow = frontYellow(front.speed);
				front.rearBlue = rearBlue(front.speed);
				back.frontRed = frontRed(back.speed);
				back.frontYellow = frontYellow(back.speed);
				back.rearBlue = rearBlue(back.speed);
				if((front.rear - front.rearBlue)-(back.front + back.frontYellow) === 0)
				    cmd = "slow";
				if((front.rear - front.rearBlue) - (back.font + back.frontRed) === 0)
					cmd = "stop";
			}
		}
	}
    console.log("Applying train safety...");
	return cmd;
}
