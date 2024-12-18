# JavaScript Loose Equality and NaN
This repository demonstrates a common, yet subtle, bug in JavaScript related to loose equality (==) and NaN (Not a Number).
The `bug.js` file contains the buggy code.  The `bugSolution.js` file shows the corrected version.
The issue stems from the fact that `NaN == NaN` evaluates to `false`, which is counter-intuitive.  Strict equality (`===`) should be used for reliable comparisons, especially with NaN.