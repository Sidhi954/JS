//for Each
let coding=["js","java","cpp","csharp"]

coding.forEach(function(val){             //Approach1
    console.log(val);
})

coding.forEach((val)=>{                  //Approach2
    console.log(val)
})

coding.forEach((val,index,arr)=>{
    console.log(val,index,arr)
})

let myarr=[
    {
        name:"Sidhi",
        roll:8
    },
    {
        name:"Ridhi",
        roll:7
    },
    {
        name:"Nidhi",
        roll:5
    }
]

myarr.forEach((item)=>{
    console.log(item.roll)
})