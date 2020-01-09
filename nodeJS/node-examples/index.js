var rect = require('./rectangle.js');



function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b );
	rect(l,b, (err,rectangle) => {
		if(err){
			console.log("ERROR: " , err.message);
		}
		else{
			console.log("the area of the rectangle of dim "
			 + l + " , "+b + " is " +rectangle.area());
			console.log("the perimeter of the rectangle of dim "
			 + l + " , "+b + " is " +rectangle.perimeter());
			

		}
	});  

}


solveRect(23, 47);
