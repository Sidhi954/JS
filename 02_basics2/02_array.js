const arr1=["sidhi","ridhi","aditya"]
const arr2=["rashmi","manoj","nidhi"]

const ans=[...arr1,...arr2]        //spread operator
console.log(ans)

const arr=[1,2,3,[4,5,[6,7,8,[9,1,2],0],1,2],3]
console.log(arr.flat(Infinity))

const name="Sidhi"
console.log(Array.from(name))   //change the variable to an array

const score1=100
const score2=200
const score3=300
console.log(Array.of(score1,score2,score3))
console.log(Array.of(100,200,300))

const items=["item1","item2","item3","item4"]
items.forEach((ele)=>{
    console.log(ele);
})