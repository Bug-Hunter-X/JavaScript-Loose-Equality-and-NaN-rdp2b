function foo(a, b) {  return Object.is(a, b);}
//or
function foo(a, b) {  if (Number.isNaN(a) && Number.isNaN(b)) {    return true;  }  return a === b;} 