module.exports = function solveEquation(equation) {
  var arr = equation.split (" ");
  var a = +arr[0];
  var b = +arr[4];
  var c = +arr[8];
  if (arr[3] == "-"){
    b *= -1;
  }
  if (arr[7] == "-"){
    c *= -1;
  }
  var d = Math.sqrt(b*b - 4*a*c)
  var x1 = Math.round( ((-1)*b+d)/(2*a) );
  var x2 = Math.round( ((-1)*b-d)/(2*a) );

  return [x1,x2].sort(function(i,j){
    return (i-j);
  })
}


