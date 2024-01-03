const user={
    username:"Sidhi",
    price:99,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to my website`)
        console.log(this)
    }
}
user.welcomeMessage()
user.username="Suman"
user.welcomeMessage()


function nameAnm(){
    const animal="horse"
    console.log(this.animal)
}
nameAnm()  //This will give undefined as a result becoz we can only use this with objects.....

//This with functions are not allowed



//Arrow function
const myFun=(num1,num2)=>{              //With curly braces we have to use return statement
    return num1+num2
}
console.log(myFun(4,4))


//Another way
const myFun2=(num1,num2)=> num1+num2           //Without curly brace we don't have to use return statement
console.log(myFun2(8,8))


//we cannot use this with arrow function as well