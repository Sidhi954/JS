let val=[1,2,3,4,5,6,7,8,9,10]

let myval=val.map((num)=> num+10)
console.log(myval)

//Using for each loop for the above program
let val1=[1,2,3,4,5,6,7,8,9,10]
let new_val=[]
val1.forEach((num)=> new_val.push(num+20))
console.log(new_val)

//chaining in maps
let myarr=[1,2,3,4,5,6,7,8,9,10]
let new_arr=myarr.map((num)=>num*10)
                 .map((num)=>num+1)
                 .filter((num)=>num>=40)
                
console.log(new_arr)           