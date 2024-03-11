//object literals:-Create a single object, using an object literal.Using an object literal, you both define and create an object in one statement.
const JSuser={
    naam:"Sidhi",
    age:16,
    email:"sidhi123@glite.com",
    location:"coorg",
    isSpects:"true"
}
console.log(JSuser)
console.log(JSuser["age"])

//objects:-one of the javascript datatypes.
// Booleans can be objects (if defined with the new keyword)
// Numbers can be objects (if defined with the new keyword)
// Strings can be objects (if defined with the new keyword)
// Dates are always objects
// Maths are always objects
// Regular expressions are always objects
// Arrays are always objects
// Functions are always objects
// Objects are always objects
JSuser.location="bengaluru"
//Object.freeze(JSuser)
console.log(JSuser)

//After freezing the object we cannot change its value
JSuser.location="hyderabad"
console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello JS user");
}

JSuser.greetingTwo = function(){
    console.log(`Hello our JS user, ${this.naam}`);
}

console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());

//sometimes to access a variable we have to use square bracket instead of (.)