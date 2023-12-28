const myArr=[9,6,5,7,2]
console.log(myArr[3])

const myArr2=[true,2,8,43,"Sidhi","Suman"]
console.log(myArr2[0])
console.log(myArr2[3])
console.log(myArr2[4])

myArr.push(3)
myArr.push(4)
console.log(myArr)
myArr.pop()
console.log(myArr)

console.log(myArr.includes(2))
console.log(myArr2.indexOf("Sidhi"))

console.log(myArr.unshift(8))
console.log(myArr)
console.log(myArr.shift())
console.log(myArr)

//slice and splice in Array
console.log("A", myArr)
const ar1=myArr.slice(1,4)
console.log("B", ar1)

const ar2=myArr.splice(1,4)
console.log("C",ar2)
console.log("D", myArr)

//splice: it changes the content of the array by changing/replacing/removing existing elements and/or adding the elements.