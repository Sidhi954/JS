//for in loop
let myObj={
    '1':"Raj",
    '2':"Aarushi",
    '3':"Sana",
    '4':"Lara"
}

for (const key in myObj) {
    console.log(`Roll no:-${key} and name:-${myObj[key]} `)
}

// for in--->arrays
let arr=[1,2,3,4]
for (const key in arr) {
    console.log(key,arr[key]);
}

//We cannot use for in loop for maps also because maps are not iterable