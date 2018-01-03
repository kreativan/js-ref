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
