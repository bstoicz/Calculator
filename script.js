
// Button event listeners
const buttonZero = document.getElementById("zero");
buttonZero.addEventListener("click", function () {populate(0);});

const buttonOne = document.getElementById("1");
buttonOne.addEventListener("click", function () {populate(1);});

const buttonTwo = document.getElementById("2");
buttonTwo.addEventListener("click", function () {populate(2);});

const buttonThree = document.getElementById("3");
buttonThree.addEventListener("click", function () {populate(3);});

const buttonFour = document.getElementById("4");
buttonFour.addEventListener("click", function () {populate(4);});

const buttonFive = document.getElementById("5");
buttonFive.addEventListener("click", function () {populate(5);});

const buttonSix = document.getElementById("6");
buttonSix.addEventListener("click", function () {populate(6);});

const buttonSeven = document.getElementById("7");
buttonSeven.addEventListener("click", function () {populate(7);});

const buttonEight = document.getElementById("8");
buttonEight.addEventListener("click", function () {populate(8);});

const buttonNine = document.getElementById("9");
buttonNine.addEventListener("click", function () {populate(9);});

const buttonPoint = document.getElementById("point");
buttonPoint.addEventListener("click", function () {populate(".");});


const buttonAdd = document.getElementById("plus");
buttonAdd.addEventListener("click", function () {operation("add")});

const buttonMinus = document.getElementById("minus");
buttonMinus.addEventListener("click", function () {operation("subtract")});

const buttonMultiply = document.getElementById("x");
buttonMultiply.addEventListener("click", function () {operation("multiply")});

const buttonDivide = document.getElementById("divide");
buttonDivide.addEventListener("click", function () {operation("divide")});

const buttonEquals = document.getElementById("equals");
buttonEquals.addEventListener("click", function () {
    b = parseFloat(document.getElementById("result").innerHTML);
    if (a==null || b==null) {return;}
    else { result = operate(operator,a,b);
        update(result);
    }
    a=null;
    b=null;
});

const buttonAC = document.getElementById("ac");
buttonAC.addEventListener("click", function () {
    document.getElementById("result").innerHTML = 0;
    resultArray = [];
    return;
});

const buttonPlusMinus = document.getElementById("plusminus");
buttonPlusMinus.addEventListener("click", function () {
    let negative = - document.getElementById("result").innerHTML;
    update(negative);
    return;
});

const buttonPercent = document.getElementById("percent");
buttonPercent.addEventListener("click", function () {
    let percent = document.getElementById("result").innerHTML * 100;
    update(percent);
    return;
});

// Initialize result array
let resultArray = [];

// Populate result array
function populate(digit) {
    // if (result !== null) {resultArray =[];}
    resultArray.push(digit);
    result = resultArray.join("");
    update(result);
    return;
}

// Update current results on screen
function update(resultsString) {
    if (typeof(resultsString) == "number") {
        resultsString = resultsString.toString();
    }
    results = resultsString.substring(0,8);
    document.getElementById("result").innerHTML = results;
    return;
}

//Operators
let operator = null;
let a = null;
let b = null;
let temp = null;


// Operation functions

function operate(operator,a,b) {
    if (operator == "add") {
        return (a+b).toFixed(2);
    }
    else if (operator == "subtract") {
        return (a-b).toFixed(2);
    }
    else if (operator == "multiply") {
        return (a*b).toFixed(2);
    }
    else if (operator == "divide") {
        return (a/b).toFixed(2);
    }
}


function operation(sign) {
    if (a === null) {
    a = parseFloat(document.getElementById("result").innerHTML);
    document.getElementById("result").innerHTML = "";
    resultArray = [];
    operator = sign;
    return; 
    }
    else if (b === null) {
    b = parseFloat(document.getElementById("result").innerHTML);
    document.getElementById("result").innerHTML = "";
    resultArray = [];
    operator = sign;
    return;
    }
}

