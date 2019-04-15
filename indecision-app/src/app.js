import './utils.js';
import subtract, { square, add } from './utils.js';


console.log('app.js is running!');

// console.log(square(4), add(1,3), subtract(200, 145));

import isSenior, { isAdult, canDrink } from './person.js';

console.log(isAdult(17), canDrink(22), isSenior(76));