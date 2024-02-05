//forEach
let arr=["god","chair","table","laptop"]

let new_arr= arr.forEach((item)=>{
    console.log(item);
    //return new_arr;
})
//console.log(new_arr)

//For each loop does not return anything

//Filter
let arr1=[1,2,3,4,5,6,7,8,9]

let num=arr1.filter((item)=> item>5)
console.log(num)

//If we use curly braces that is the scope we have to use return statement
let arr2=[1,2,3,4,5,6,7,8,9]
let num1=arr2.filter((item)=>{
    return item>4
})
console.log(num1)