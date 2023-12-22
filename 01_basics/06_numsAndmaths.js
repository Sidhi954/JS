const score=400
console.log(score)
console.log(typeof score)

const num=new Number(100)
console.log(num)
console.log(num.toString().length)

//toLocaleString()
const num1=100000
console.log(num1.toLocaleString('en-IN'))

//-------------------------MATH---------------------------//
console.log(Math.PI);
const rad=4;
console.log("Circumference of circle:" +(2*Math.PI*rad*rad).toFixed(2))

console.log((Math.SQRT2).toFixed(2))

console.log(Math.abs(-8))
console.log(Math.ceil(8.43))
console.log(Math.floor(8.43))
console.log(Math.round(5.90),Math.round(5.05),Math.round(5.45))
console.log(Math.max(7,8,5))
console.log(Math.min(7,8,5))


//Math.random():generates random value bewteen 0 and 1
console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10))


//Math.exp():power e
console.log(Math.exp(1).toFixed(2))
console.log(Math.exp(Infinity))
console.log(Math.exp(-Infinity))


