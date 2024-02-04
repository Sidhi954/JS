//for
for(let index=0;index<10;index++){
    const ele=index;
    console.log(ele);
}

for (let i=0;i<5;i++){
    console.log(`outer loop value:${i}`)
    for(let j=0;j<3;j++){
        console.log(`Inner loop with value of ${j} and inner loop${i}`)
    }
}

let myArr=["doraemon","nobita","suzuka","dorami"]
for(let i=0;i<myArr.length;i++){
    console.log(myArr[i])
}

//break and continue
for(let i=1;i<=20;i++){
    if(i==8){
        console.log(`8 is detected`)
        break;
    }
    console.log(i)
}

for(let i=1;i<=10;i++){
    if(i==7){
        console.log(`stop for once`)
        continue;
    }
    console.log(i)
}