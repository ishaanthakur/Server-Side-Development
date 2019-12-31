var rect = require('./rectangle');


function solverect(l,b ){
    if(l<= 0 || b<=0) console.log("error");
    else{
        console.log("the area " +rect.area(l,b) );
    }
}

solverect(2,3);