// ES6 Module = An external file that contains reusable code that
//              that can be imported into other Javascript files.
//              Write reuseable code for many different apps.
//              Can contain variables, classes, functions... and more
//              Introduced as part of ECMAScript 2015 update

import {PI,getArea,getCircumference,getDiameter} from './mathUtilities.js'

const circumference = getCircumference(10);
console.log(PI);
console.log(`${circumference.toFixed(2)}cm`);