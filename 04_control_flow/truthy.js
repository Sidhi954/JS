//falsy values:- false, 0, -0, BigInt, null, undefined, NaN, ""

//truthy values:-"0",'false'," ", [], {}, function(){}

const user=[]
if(user.length===0){
    console.log(`Array is empty`)
}

//for objects
const myObj={}
if(Object.keys(myObj).length===0){
    console.log(`Object is empty`)
}

//Nullish Coelescing Operator(??) :null and undefined

let val1=null??5
let val2=5??10
let val3=undefined??8
console.log(val1,val2,val3)