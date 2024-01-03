//Immediately Invoked Function Expression

(function myFun(){
    console.log(`DB CONNECTED`)
})();
//We have to use semicolon after invoking immediate functions.
//We use iife to reduce the pollution caused by global scope
(conn=(name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})("Aditya")