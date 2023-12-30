function add(num1,num2){                  //num1 and num2 are the parameters in function definition
    console.log(num1+num2)
}

add(8,2)                                // 8 and 2 are arguments in function execution/function call


function addTwo(num1,num2){
    return (num1+num2);
}
console.log(addTwo(8,3))


function loggedIn(userName){
    if(userName===undefined){
        console.log("Please enter your name")
        return
    }
    return `${userName} just logged In.`
}

//console.log(loggedIn("Sidhi")) //Instead of any name if don't pass anything then it will be undefined.
console.log(loggedIn())