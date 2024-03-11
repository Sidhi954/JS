const name="Sidhi"
const hobby="reading books"

console.log(`My name is ${name} and I love ${hobby}.`);
console.log(hobby.length);
console.log(hobby.toUpperCase());

//Character access in string: using charAt and giving index value

console.log(hobby.charAt(8));
console.log(hobby[9]);

//Concatenation of strings
console.log(name.concat(' ',hobby));
console.log(name.concat(' and ',hobby))

//endsWith():-either return true or false
const str1="Ridhi Raj"
const str2="Works as a senior associate analyst"
console.log(str2.endsWith('analyst'));
console.log(str1.startsWith('Ridhi'))

//includes()
console.log(str1.toLowerCase('Ridhi').includes('ridhi'))

//trim():removes whitesapce from both sides of the string
const s1="   Rashmi Kumari Sinha   "
console.log(s1.trim())

//repeat 
const word="very "
console.log(`I am ${word.repeat(3)} happy.`)

//substring: here index 3 is included and 9 is excluded that means we have to go till 8th index
const sent="State bank of India"
console.log(sent.substring(3,9))
console.log(sent.substring(0))

//slice
const sent1="work hard with all your efforts"
console.log(sent1.slice(2,9))
console.log(sent1.slice(0))

//splice:- first parameter takes the starting index from where the deletion will happen
//second parameter contains the count till the deletion will happen
let arr=[1,2,3,4,5,6,7]
arr.splice(2,4)
console.log(arr) //op:-[1,2,7]

//if we don't pass the second parameter , it will remove from the start index to till end index.
let arr2=[1,2,3,4,5,6,7,8]
arr2.splice(3)
console.log(arr2)   //op:-[1,2,3]