/*-------------------------------------------------------------
    # Objects
-------------------------------------------------------------*/

// empty object
var emptyObj = {};

// example Object
var car = {
    type:"Fiat",
    model:"500",
    color:"white"
};

// add property to en object
car.year = "2017"

// remove property
delete car.year

// Reference object (its not a copy of an object its the same object asigned to another var)
car2 = car;

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

/*-------------------------------------------------------------
    # Regex
-------------------------------------------------------------*/

var string = "What im looking for";
var regex = /What/;
regex.test(string)

// case insesitive
var regex = /what/i;
regex.test(string)

// at the begining of the string
var regex = /^what/i;
regex.test(string)

// at the end of the string
var regex = /what$/i;
regex.test(string)

// Dot (.) means any char
var regex = /Wh./;
regex.test(string)

/*-------------------------------------------------------------
    # Comparison
-------------------------------------------------------------*/
1 === 1
-> true
1 !== 1
-> false
1 < 2
-> true
1 > 2
-> false

/*-------------------------------------------------------------
    # Operators
-------------------------------------------------------------*/

/**
 *  Even odd
 *  0 = even, 1 = odd
 *
 */
20 % 2
-> 0
19 % 2
-> 1

/**
 *  increasement
 *
 */
var counter  = 0;
counter = counter + 1;
-> 1
// shorthand
counter += 1;
// or
counter += 5;
// increase by 1
counter++;

// decreasement
counter -= 1;
counter--;
// multiply
counter *= 2;
