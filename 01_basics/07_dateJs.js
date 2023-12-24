const myDate=new Date()
console.log(myDate)

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())


//We can add further inputs also in myCreatedDate variable it will be counted as hour,minutes,seconds and so on....
let myCreatedDate=new Date(2023,2,15)
console.log(myCreatedDate.toLocaleString())

let myTime=new Date()
console.log(myTime.getTime())
console.log(myTime.getUTCDay())
console.log(myTime.getUTCMinutes())
