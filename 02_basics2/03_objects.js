//object literals
const JSuser={
    naam:"Sidhi",
    age:16,
    email:"sidhi123@glite.com",
    location:"coorg",
    isSpects:"true"
}
console.log(JSuser)
console.log(JSuser["age"])


JSuser.location="bengaluru"
Object.freeze(JSuser)
console.log(JSuser)

//After freezing the object we cannot change its value
JSuser.location="hyderabad"
console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello JS user");
}

JSuser.greetingTwo = function(){
    console.log(`Hello our JS user, ${this.name}`);
}

console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());