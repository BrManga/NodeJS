var rect = require("./rectangle");
function solveRect(l, b) {
  console.log("solving for rect l= " + l + "and b= " + b);
  if (l <= 0 || b <= 0) {
    console.log(
      "Rectangle dimensions should be greater than zero. l= " + l + "b= " + b
    );
  } else {
    console.log("the area of rect is" + rect.area(l, b));
    console.log("the perimeter of rect is" + rect.perimeter(l, b));
  }
}
solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);
