//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


//Primitive: These are call-by-value. The types of primitive data types include String, Number, Boolean, Null, Undefined, Symbol, and BigInt. Note that Symbols uniquely identify variables, even if two variables have the same data and data type. Primitive variables datatype is same but null datatype is object 
// Non-primitive: These are call-by-reference. The types of non-primitive data types are Array, Object, and Function. The data type for these is 'object,' but for functions, they return a data type of 'function,' though they also have an object data type.

// Return type of variables in JavaScript
//  Primitive Datatypes
//    1) Number => number
//    2) String  => string
//     3)   Boolean  => boolean
//     4) null  => object
//     5) undefined  =>  undefined
//     6) Symbol  =>  symbol
//     7) BigInt  =>  bigint


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive)  copy milta hai && heap(Non- primitive)me reference milta hai

let myYoutubename = "hiteshchoudhary"
anothername ="chaiaurcode"
let anothername = myYoutubename
console.log(myYoutubename);

console.log(anothername);
let userOne = { 
    email: "user@google.com"
    

}
let userTwo = userOne

userTwo.email="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

