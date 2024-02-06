//forEach
let arr=["god","chair","table","laptop"]

let new_arr= arr.forEach((item)=>{
    console.log(item);
    //return new_arr;
})
//console.log(new_arr)

//For each loop does not return anything

//Filter
let arr1=[1,2,3,4,5,6,7,8,9]

let num=arr1.filter((item)=> item>5)
console.log(num)

//If we use curly braces that is the scope then we have to use return statement
let arr2=[1,2,3,4,5,6,7,8,9]
let num1=arr2.filter((item)=>{
    return item>4
})
console.log(num1)

//Using For Each
let arr3=[1,2,3,4,5,6,7,8,9]
let new_arr1=[]

arr3.forEach((num)=>{
    if(num>5) new_arr1.push(num)
})
console.log(new_arr1)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let myBooks=books.filter((bk)=>bk.genre==='Fiction')
  console.log(myBooks)

  myBooks=books.filter((bk)=>{
    return bk.publish>=1990 && bk.genre==='Science'
  })
  console.log(myBooks)

