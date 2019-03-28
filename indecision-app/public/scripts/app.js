'use strict';

var square = function square(x) {
    return x * x;
};

// const squareArrow = (x) => {
//     return x * x;
// };

var squareArrow = function squareArrow(x) {
    return x * x;
};

console.log(squareArrow(8));

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
//}

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Joao Luiz'));
