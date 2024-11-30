const OPERATOR_OBJECT = {
    add,
    subtract,
    multiply,
    divide
};

let num1 = ""; 
let num2 = "";
let runningTotal = "";
let updateFirstNum = true;
let runningTotalCalc = false; 
let operator = 'addition';
let screenFormula = document.querySelector(".screen-formula");
let screenTotal = document.querySelector(".screen-total");
let screenFirstNum = document.querySelector(".first-number");
let screenSecondNum = document.querySelector(".second-number");
let screenOperator = document.querySelector(".operator-symbol");


function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function percentage(num1) {
    return num1 / 100;
};

function changeSign(num1) {
    return num1 * (-1);
};

function setNumberVariables(event) {
    if(updateFirstNum) {
        num1 += event.target.innerText;
        screenFirstNum.innerText += event.target.innerText;
    } else {
        num2 += event.target.innerText;
        screenSecondNum.innerText += event.target.innerText;
        runningTotalCalc = false;
    }
    
};

function getNumpadInput (event) {
    let keyCode = event.code; 
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

}


document.querySelectorAll(".number-button").forEach(item => {item.addEventListener("click", setNumberVariables)});

document.querySelectorAll(".operation-button").forEach(item => {item.addEventListener("click", (event) => {
    if(num1 === "") {
        
    } else {
        updateFirstNum = false;
        operator = event.target.id;
        screenOperator.innerText = event.target.innerText;
    }
    
})});

document.querySelector("#clear").addEventListener("click", () => {
    num1 = "";
    num2 = "";
    runningTotal = "";
    updateFirstNum = true;
    operator = 'add';
    screenFirstNum.innerText = "";
    screenSecondNum.innerText = "";
    screenOperator.innerText = "";
    screenTotal.innerText = "";
});

document.querySelector(".equals-button").addEventListener("click", () => {
    runningTotal = String(OPERATOR_OBJECT[operator](Number(num1), Number(num2)).toFixed(4));
    screenTotal.innerText = runningTotal;
    num1 = runningTotal;
    num2 = "";
    screenFirstNum.innerText = runningTotal;
    screenSecondNum.innerText = num2;
    runningTotalCalc = true;
});

document.querySelector(".decimal-button").addEventListener("click", () => {
    if(updateFirstNum && !num1.split("").includes(".")) {
        num1 += ".";
        screenFirstNum.innerText += ".";
    } 
    if(!updateFirstNum && !num2.split("").includes(".")) {
        num2 += ".";
        screenSecondNum.innerText += ".";
    }
});

document.querySelector(".change-sign-button").addEventListener("click", () => {
    if(updateFirstNum && !num1.split("").includes("-")) {
        num1 = "-" + num1;
        screenFirstNum.innerText = num1;
    }else if(runningTotalCalc && !num1.split("").includes("-")) {
        num1 = "-" + num1;
        screenFirstNum.innerText = num1;
    }else if(runningTotalCalc && num1.split("").includes("-")) {
        num1 = num1.slice(1);
        screenFirstNum.innerText = num1;
    }else if(!updateFirstNum && !num2.split("").includes("-")) {
        num2 = "-" + num2;
        screenSecondNum.innerText = num2;
    }else if(updateFirstNum && num1.split("").includes("-")) {
        num1 = num1.slice(1);
        screenFirstNum.innerText = num1;
    }else if(!updateFirstNum && num2.split("").includes("-")) {
        num2 = num2.slice(1);
        screenSecondNum.innerText = num2;
    }
});

document.querySelector(".delete-button").addEventListener("click", () => {
    if(updateFirstNum) {
        num1 = num1.slice(0, -1);
        screenFirstNum.innerText = num1;
    }
    num2 = num2.slice(0, -1);
    screenSecondNum.innerText = num2;
});

document.querySelector(".percentage-button").addEventListener("click", () => {
    if(updateFirstNum) {
        num1 = String((Number(num1)/100));
        screenFirstNum.innerText = num1;
    } else {
        num2 = String((Number(num2)/100));
        screenSecondNum.innerText = num2;
    }
});

document.addEventListener("keydown", (e) => {
    console.log(e.code.split("").slice(6).join(""));

})
