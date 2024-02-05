//for of
// [" "," "," "] -->Strings inside an array
// [{},{}] --->objects inside na array

let arr=[1,2,3,4]
for (const val of arr) {
    console.log(val);
}

let word="Hello Sidhi!!"
for (const w of word) {
    if(w==' ') continue;
    console.log(`Each word is ${w}`);
}


//Maps:->No duplicate is allowed, maintain order
let map=new Map();
map.set("1","Sidhi")
map.set("2","Ridhi")
map.set("3","Nidhi")
console.log(map)

//[key,value]-->array destructuring
for (const [key,value] of map) {
    console.log(key,"=",value)
}

//Objects are not iterable using for of loop
