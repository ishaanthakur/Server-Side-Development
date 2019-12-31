var rect = {

    perimeter: (x,y) => (2*(x+y)), 
    area: (x,y) => (x*y)

};



function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b );
    if(l <=0 || b<=0) console.log("please enter a valid value");
   else{ console.log("perimeter: "  +rect.perimeter(l,b));
    console.log("area: " + rect.area(l,b));

   }

}


solveRect(23, 47);
