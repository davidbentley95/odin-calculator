const OPERATOR_OBJECT = {
    'addition' : add,
    'subtraction' : subtract,
    'multiplication' : multiply,
    'division' : divide
}

let num1 = ""; 
let num2 = "";
let runningTotal = "";
let updateFirstNum = true;
let operator = 'addition';
let screenFormula = document.querySelector(".screen-formula");
let screenTotal = document.querySelector(".screen-total");


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function percentage(num1) {
    return num1 / 100;
}

function changeSign(num1) {
    return num1 * (-1);
}

function setNumberVariables(event) {
    if(updateFirstNum) {
        num1 += event.target.innerText;
        console.log(Number(num1));
        screenFormula.innerText += event.target.innerText;
    } else {
        num2 += event.target.innerText;
        console.log(Number(num2));
        screenFormula.innerText += event.target.innerText;
    }
    
}

document.querySelectorAll(".number-button").forEach(item => {item.addEventListener("click", setNumberVariables)});

document.querySelectorAll(".operation-button").forEach(item => {item.addEventListener("click", (event) => {
    updateFirstNum = false;
    operator = event.target.id;
    screenFormula.innerText += event.target.innerText;
    console.log(operator);
})});

document.querySelector("#clear").addEventListener("click", () => {
    num1 = "";
    num2 = "";
    runningTotal = "";
    updateFirstNum = true;
    operator = 'addition';
    screenFormula.innerHTML = "";
    screenTotal.innerHTML = "";
})

document.querySelector(".equals-button").addEventListener("click", () => {
    // console.log(OPERATOR_OBJECT[operator](Number(num1), Number(num2)));
    runningTotal = OPERATOR_OBJECT[operator](Number(num1), Number(num2))
    screenTotal.innerText = runningTotal;
    num1 = runningTotal;
    num2 = "";
    screenFormula.innerText = runningTotal;
})

document.querySelector(".decimal-button").addEventListener("click", () => {
    if(updateFirstNum && !num1.split("").includes(".")) {
        num1 += ".";
        console.log(num1);
        screenFormula.innerText += ".";
    } 
    if(!updateFirstNum && !num2.split("").includes(".")) {
        num2 += ".";
        console.log(num2);
        screenFormula.innerText += ".";
    }
});


// const sum = add(10, 20);
// console.log(`Add 10+20 = ${sum}`);

// const sub = subtract(25, 5);
// console.log(`subtract 25-5 = ${sub}`);

// const prod = multiply(4, 3);
// console.log(`multiply 4*3 = ${prod}`);

// const quotient = divide(25, 5);
// console.log(`divide 25/5 = ${quotient}`);

// const perc = percentage(78);
// console.log(`Percentage of 78 = ${perc}`);

// const num = changeSign(14);
// console.log(`Change sign of 14 = ${num}`);

// const otherNum = changeSign(-6);
// console.log(`Change sign of -6 = ${otherNum}`);
