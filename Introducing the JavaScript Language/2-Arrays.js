/*-------------------------------------------------------------
# Arrays
-------------------------------------------------------------*/

// empty array
var emptyArray = [];

// example array
var cars = [
    "Saab",
    "Volvo",
    "BMW"
];

// count array
cars.length;
-> 3

// get value from array
cars[0]
-> Saab

// change value in array
cars[0] = "Audi";

// add new value to the bottom of array
cars[cars.length]  = "Mercedes";
// or
cars.push("Subaru");

// remove value from array
// last value
cars.pop();
// first value
cars.shift();
// check mozila ref. for more...
