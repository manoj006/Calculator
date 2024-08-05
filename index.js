let inputEle = document.getElementById("inputEle");
let expression = '';


function onAddition(){
    expression+='+'
    inputEle.value = expression;
}
function onSubtraction(){
    expression+='-'
    inputEle.value = expression;
    opt='-'
    operator = true
}
function onMultiplication(){
    expression+='*'
    inputEle.value = expression;
}
function onDivision(){
    expression+='/'
    inputEle.value = expression;
}
function onModulo(){
    expression+='%'
    inputEle.value = expression;
}
function onDoubleZero(){
    expression+='00'
    inputEle.value = expression
}
function onZero(){
    expression+='0'
    inputEle.value = expression
}

function onOne(){
    expression+='1'
    inputEle.value = expression
}

function onTwo(){
    expression+='2'
    inputEle.value = expression
}

function onThree(){
    expression+='3'
    inputEle.value = expression
}
function onFour(){
    expression+='4'
    inputEle.value = expression
}
function onFive(){
    expression+='5'
    inputEle.value = expression
}
function onSix(){
    expression+='6'
    inputEle.value = expression
}
function onSeven(){
    expression+='7'
    inputEle.value = expression
}
function onEight(){
    expression+='8'
    inputEle.value = expression
}
function onNine(){
    expression+='9'
    inputEle.value = expression
}
function onPoint(){
    expression+='.'
    inputEle.value = expression
}
function onEqual(){
    inputEle.value = eval(inputEle.value)
    expression = inputEle.value.toString()
}
    
function onClear(){
    expression=''
    inputEle.value=expression
}

function onDel(){
    expression = expression.slice(0, expression.length-1)
    inputEle.value = expression
}