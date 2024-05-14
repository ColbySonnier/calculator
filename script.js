output = document.querySelector('.output')
testUpdate = document.querySelector('#test')
btn0= document.querySelector('.btn-0')
btn1= document.querySelector('.btn-1')
btn2= document.querySelector('.btn-2')
btn3= document.querySelector('.btn-3')
btn4= document.querySelector('.btn-4')
btn5= document.querySelector('.btn-5')
btn6= document.querySelector('.btn-6')
btn7= document.querySelector('.btn-7')
btn8= document.querySelector('.btn-8')
btn9= document.querySelector('.btn-9')
btnClear= document.querySelector('.clear')
btnChangeSigns= document.querySelector('.change-sign')
btnPercent= document.querySelector('.percent')
btnDivide= document.querySelector('.btn-divide')
btnMultiply= document.querySelector('.btn-multiply')
btnSubtract= document.querySelector('.btn-subtract')
btnAdd= document.querySelector('.btn-add')
btnDecimal= document.querySelector('.btn-decimal')
btnEnter= document.querySelector('.btn-enter')
buttons= document.querySelectorAll('button')
normalButtons= document.querySelectorAll('.normal-btn')

let currentInput="";
let completeInput="";

//multiply, enter, change sign, percent,
btnMultiply.addEventListener('click', function(){
    completeInput+= '*';
    console.log(completeInput);
    output.innerText= 'x';
}); 

btnClear.addEventListener('click', function(){
    completeInput='';
    console.log(completeInput);
    output.innerText= '0';
});

btnChangeSigns.addEventListener('click', function(){
    completeInput-= currentInput
    currentInput*= -1
    completeInput+= currentInput
    console.log(completeInput);
    output.innerText= completeInput;
});

btnEnter.addEventListener('click', function(){
    completeInput= eval(completeInput)
    console.log(completeInput);
    output.innerText= completeInput;
})

for (let i=0; i<19; i++){
    normalButtons[i].addEventListener('click', function(){
        currentInput= normalButtons[i].innerText;
        completeInput+= currentInput;
        console.log(completeInput);
        console.log(currentInput)
        output.innerText= completeInput;
    }) 
}



