function Click0() {
    display.innerHTML += "0";
}

function Click1() {
    display.innerHTML += "1";
}

function Click2() {
    display.innerHTML += "2";
}

function Click3() {
    display.innerHTML += "3";
}

function Click4() {
    display.innerHTML += "4";
}

function Click5() {
    display.innerHTML += "5";
}

function Click6() {
    display.innerHTML += "6";
}

function Click7() {
    display.innerHTML += "7";
}

function Click8() {
    display.innerHTML += "8";
}

function Click9() {
    display.innerHTML += "9";
}

function Clear() {
    display.innerHTML = "";
}

function Add() {
    display.innerHTML += "+";
}

function Subtract(){
    display.innerHTML += "-";
}

function Multiply(){
    display.innerHTML += "*";
}

function Divide(){
    display.innerHTML += "/";
}

function Equals(){

    
    fullProblemStr = display.innerHTML;
    fullProblemArr = fullProblemStr.split('');

    if (fullProblemArr.includes("+")){
        placeholderArr = fullProblemStr.split('+')
        firstNum = parseFloat(placeholderArr[0]);
        secondNum = parseFloat(placeholderArr[1]);
        result = firstNum + secondNum;
    } else if (fullProblemArr.includes("-")){
        placeholderArr = fullProblemStr.split('-')
        firstNum = parseFloat(placeholderArr[0]);
        secondNum = parseFloat(placeholderArr[1]);
        result = firstNum - secondNum;
    } else if (fullProblemArr.includes("*")){
        placeholderArr = fullProblemStr.split('*')
        firstNum = parseFloat(placeholderArr[0]);
        secondNum = parseFloat(placeholderArr[1]);
        result = firstNum * secondNum;
    } else if (fullProblemArr.includes("/")){
        placeholderArr = fullProblemStr.split('/')
        firstNum = parseFloat(placeholderArr[0]);
        secondNum = parseFloat(placeholderArr[1]);
        result = firstNum / secondNum;
    }

    display.innerHTML = result;
}

let display = document.getElementById("display");
let clear = document.getElementById("clear");
let enter = document.getElementById("equals");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

let fullProblemStr = "";
let fullProblemArr = "";
let placeholderArr = "";
let operand = "";
let firstNum = 0;
let secondNum = 0;
let result = 0;



zero.addEventListener("click", Click0);
one.addEventListener("click", Click1);
two.addEventListener("click", Click2);
three.addEventListener("click", Click3);
four.addEventListener("click", Click4);
five.addEventListener("click", Click5);
six.addEventListener("click", Click6);
seven.addEventListener("click", Click7);
eight.addEventListener("click", Click8);
nine.addEventListener("click", Click9);

plus.addEventListener("click", Add);
minus.addEventListener("click", Subtract);
multiply.addEventListener("click", Multiply);
divide.addEventListener("click", Divide);
enter.addEventListener("click", Equals);
clear.addEventListener("click", Clear);
