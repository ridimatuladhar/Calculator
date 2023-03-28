/*
 * Implement all your JavaScript in this file!
 */
var num_a = "";
var currentOperator = "";
var num_b = "";
var result = 0;

function addNumber(num) {
    num_a += num;
    document.getElementById("display").value = num_a;
}

function setOperator(operator) {
    if (num_a === "") {
        return;
    }
    
    if (num_b !== "") {
        calculate();
    } else {
        num_b = num_a;
        num_a = "";
    }
    
    currentOperator = operator;
}

function calculate() {
    if (num_b === "" || num_a === "") {
        return;
    }
    
    var num1 = parseFloat(num_b);
    var num2 = parseFloat(num_a);
    
    if (currentOperator === "+") {
        result = num1 + num2;
    } else if (currentOperator === "-") {
        result = num1 - num2;
    } else if (currentOperator === "*") {
        result = num1 * num2;
    } else if (currentOperator === "/") {
        result = num1 / num2;
    }
    
    num_b = result.toString();
    num_a = "";
    currentOperator = "";
    
    document.getElementById("display").value = result;
}

function clearDisplay() {
    num_a = "";
    currentOperator = "";
    num_b = "";
    result = 0;
    
    document.getElementById("display").value = "";
}

document.getElementById("button1").addEventListener("click", function() { addNumber("1"); });

document.getElementById("button2").addEventListener("click", function() { addNumber("2");
});

document.getElementById("button3").addEventListener("click", function() { addNumber("3");
});

document.getElementById("button4").addEventListener("click", function() {  addNumber("4");
});

document.getElementById("button5").addEventListener("click", function() {  addNumber("5");
});

document.getElementById("button6").addEventListener("click", function() {  addNumber("6");
});

document.getElementById("button7").addEventListener("click", function() {  addNumber("7");
});

document.getElementById("button8").addEventListener("click", function() {  addNumber("8");
});

document.getElementById("button9").addEventListener("click", function() {  addNumber("9");
});

document.getElementById("button0").addEventListener("click", function() {  addNumber("0");
});

document.getElementById("addButton").addEventListener("click", function() { setOperator("+");
});

document.getElementById("subtractButton").addEventListener("click", function() {  setOperator("-");
});

document.getElementById("multiplyButton").addEventListener("click", function() {   setOperator("*");
});

document.getElementById("divideButton").addEventListener("click", function() { setOperator("/");
});

document.getElementById("equalsButton").addEventListener("click", function() {  calculate();
});

document.getElementById("clearButton").addEventListener("click", function() {  clearDisplay();
});