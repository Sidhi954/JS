let form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();

    let height=parseInt(document.querySelector('#height').value)
    let weight=parseInt(document.querySelector('#weight').value)
    let result=document.querySelector('#result')
    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML="Please give a valid height"
    }
    else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML="Please give a valid weight"
    }else{
        let bmi=(weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.6){
            result.innerHTML=`You are underweight with a bmi of ${bmi}`
        }else if(bmi>=18.6 && bmi<=24.9){
            result.innerHTML=`You are in normal range with a value of ${bmi}`
        }else{
            result.innerHTML=`You are overweight with a bmi of ${bmi}`
        }
    }
})
