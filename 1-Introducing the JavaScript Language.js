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

/*-------------------------------------------------------------
# Logical Operators
-------------------------------------------------------------*/
var animal1 = "monkey";
var animal2 = "bear";
var animal3 = "tiger";

animal1 == "monkey" && animal2 == "bear"
-> true
animal1 == "ape" && animal2 == "bear"
-> false
animal1 == "ape" || animal2 == "bear"
-> true

// && are always evaluated before ||
animal1 == "ape" || animal2 == "bear" && animal3 == "tiger"
-> true

// NOT
!(animal1 === "monkey")
-> false
!(animal1 === "ape")
-> true
!(animal1 === "ape" && animal2 === "tiger")
-> true

/*-------------------------------------------------------------
# if - else
-------------------------------------------------------------*/
var answer = window.confirm("Click OK, get true. Click cancel, get false.");

if (answer === true) {
    console.log("You clicked OK");
} else {
    console.log("You clicked Cancel");
}

var answer = window.prompt("Type YES, NO or MAYBE. Then click OK.");

if (answer === "YES") {
    console.log("you said YES :)");
} else if (answer === "MAYBE") {
    console.log("you said MAYBE :|");
} else if (answer === "NO") {
    console.log("you said NO :(");
} else {
    console.log("Hey! Are you messing with me?");
}

/*-------------------------------------------------------------
# switch
-------------------------------------------------------------*/
var answer = window.prompt("Type YES, NO or MAYBE. Then click OK.");

switch (answer) {

    case "YES":
        console.log("You said YES :)");
        break;
    case "MAYBE":
        console.log("you said MAYBE :|");
        break;
    case "NO":
        console.log("you said NO :(");
        break;
    default:
        console.log("Hey! Are you messing with me?");
        break;

}
