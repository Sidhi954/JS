//if
if(true){

}
//comparison operator:- >,<,=>,<=,==,===,!=,!==
if(8!=43){
    console.log("executed")
}
//"===" it checks equality with the datatype 
if(2==="2"){
    console.log("Executed with type")
}
else{
    console.log("outside if")
}

const balance=6000

if(balance <6000){
    console.log(`balance less than 6000`)
}
else if(balanc=6000){
    console.log(`balance is 6000`)
}
else{
    console.log(`balance is greater`)
}


// &&-->and    ||--->or
const userloggedIn=true
const loggedInEmail=true
const loggedInGoogle=false

if(userloggedIn && loggedInEmail){
    console.log(`User is logged in`)
}
if(userloggedIn || loggedInGoogle){
    console.log("Log in by using gmail account")
}