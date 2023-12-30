const fbUser=new Object()    //singleton object: we can create only one instance of a class
const instaUser={}           //non-singleton object

instaUser.id="9008"
instaUser.roll=2
instaUser.isLoggedIn=false

console.log(instaUser)

const regularUser={
    email:"bubu@gmail.com",
    fullname:{
        fname:"Abhi",
        lname:"Roy"
    }
}

console.log(regularUser.fullname.fname)

const obj1={a:1,b:2}
const obj2={c:3,d:4}
const obj3={e:5,f:6}

const res_obj=Object.assign({},obj1,obj2,obj3)
console.log(res_obj)

const new_obj={...obj1,...obj2,...obj3}
console.log(new_obj)


const user=[
    {
        roll:8,
        email:"raj@gmail.com"
    },
    {
        roll:9,
        email:"ritik@gmail.com"
    },
    {
        roll:10,
        email:"sam@gmail.com"
    },
]

console.log(user[1].email)

console.log(Object.keys(instaUser))
console.log(Object.values(instaUser))
console.log(Object.entries(instaUser))
console.log(instaUser.hasOwnProperty("roll"))


//Object destructuring
const course={
    courseName:"Javascript",
    courseId:"001",
    coursePrice:499
}

console.log(course.courseId)
//Now we will fetch the data by object destructuring
const {coursePrice : price}=course

//console.log(coursePrice)
console.log(price)


