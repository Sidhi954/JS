let myarr=[1,2,3]

let arr=myarr.reduce(function(acc,currVal){
    return acc+currVal;
},0)
console.log(arr)


//Using arrow function
let new_arr=myarr.reduce((acc,currVal)=>{
    return acc*currVal
},1)
console.log(new_arr)

//Adding shopping cart values
let shoppingCart=[
    
    {
        item:"mobile",
        price:10999
    },
    {
        item:"jeans",
        price:1000
    },
    {
        item:"shoes",
        price:1500
    }
]

let pricePay=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(pricePay)