let x=10
if(true){
    let x=9
    const y=8
    var z=7
    console.log("Value of x inside if block is:" ,x)
}
console.log(z)  //since var has scope inside if block still it will get printed outside the block that's why we don't use var
console.log("Value of x outside if block is:" ,x)


//Nested scope
function one(){
    const fullname="Sidhi"
    function two(){
        const website="youtube"
        console.log(fullname);  //Global scope 
    }

    //console.log(website);  //This will give an error becoz we cannot access website variable which is inside a function as it is local variable
    two()
}
one()


if(true){
    const username="komal"
    if(username==="komal"){
        const hobby=" loves reading"
        console.log(username + hobby);
    }
    //console.log(hobby)  //Error becoz variable cannot be accessed outside the scope
}
//console.log(username)   //Error becoz of local scope



//Hoisting in JS
console.log(add(7))
function add(num1){
    return num1+1
}

//console.log(addTwo(7))   //We cannot call the function before its initialization
 const addTwo=function (num1){
    return num1+1
}
console.log(addTwo(7))