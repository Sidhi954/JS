const promiseOne=new Promise(function(resolve,reject){
    //Do an async task:-DB calls, cryptography, network 
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    },1000)
})    ///Promise is created now it's time to consume using.then
//.then ke andr ek callback function milta h, resolve is connected to .then
promiseOne.then(function(){
    console.log("Promise consumed")
})
//.then ke andr jo function h wo automatically ek argument receive krta h
//resolve ko .then k sth connct krne k liye resolve method ko callkrna prega.



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 completed")
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Sid",email:"cat@gmail.com"})
    },1000)
}).then(function(user){
    console.log(user)
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"priyasha", password:"9876"})
        }else{
            reject("Error something went wrong!")
        }
    },1000)
}).then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch(function(err){
    console.log(err);
}).finally(()=> console.log("Promise is resolved or rejected"))




const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"Rehaan", password:"2648"})
        }else{
            reject("Error something went wrong!")
        }
    },1000)
})

async function consumePromise(){
    try {
        const response=await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromise()



// async function getAllusers(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users');
//         const data=await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllusers()



fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
}).catch((err) =>console.log(err))


