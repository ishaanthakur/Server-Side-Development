module.exports= (x,y,callback) => {
	  if(x <=0 || y<=0) {

	  	setTimeout(() => 
	  		callback(new Error("please enter a valid value"), 
	  		null), 
	  		2000);
	  	
	  }


   else{ 

   	setTimeout(() =>  //simulate a delay before callback is received
	  		callback(null, 
	  		{
	  			perimeter: () => (2*(x+y)),
				area: () => (x*y)
			}), 
	  		2000);

   	// console.log("perimeter: "  +rect.perimeter(l,b));
    // console.log("area: " + rect.area(l,b));

   }

}


