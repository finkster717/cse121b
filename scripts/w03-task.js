/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2)
{
    return number1 + number2;
}

function addNumbers()
{
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);    
}

document.querySelector('#addNumbers').addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2)
{
    return number1 - number2;
}

const subtractNumbers = function ()
{
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (factor1, factor2) => 
{
    factor1 = Number(document.querySelector("#factor1").value);
    factor2 = Number(document.querySelector("#factor2").value);

    return factor1 * factor2
}

const multiplyNumbers = () => document.querySelector("#product").value = multiply(factor1, factor2);

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (dividend, divisor) => dividend / divisor;

function divideNumbers()
{
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */

function getTotalDue()
{
    let subtotal = Number(document.querySelector("#subtotal").value);
    const memberDiscount = .20;
    let total = subtotal;
    if (document.querySelector("#member").checked == true)
    {
        total -= (subtotal * memberDiscount);
    }
    else
    {
        total = subtotal;
    }
    document.querySelector("#total").textContent = total.toFixed(2);
}

document.querySelector("#getTotal").addEventListener("click", getTotalDue)

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = numbers;

/* Output Odds Only Array */

document.querySelector("#odds").innerHTML = numbers.filter(number => number % 2 === 1);

/* Output Evens Only Array */

document.querySelector("#evens").innerHTML = numbers.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */

document.querySelector("#sumOfArray").innerHTML = numbers.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */

document.querySelector("#multiplied").innerHTML = numbers.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */

let multipliedArray = numbers.map(number => number * 2);
document.querySelector("#sumOfMultiplied").innerHTML = multipliedArray.reduce((sum, number) => sum + number);