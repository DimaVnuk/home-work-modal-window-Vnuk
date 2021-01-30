'use strict';
let textAlert = prompt('Enter yor text');
if (textAlert) {
    alert(textAlert);
};
/*  1 case*/
let valueNumber = prompt('enter your number');
let valueNumberSecond = prompt('enter your second number');
let valueNumberThird = prompt('enter your third number');
if (valueNumber) {
    alert(Number(valueNumber) + Number(valueNumberSecond) + Number(valueNumberThird));
};
/*  2 case*/
let nameValue = prompt('enter your name');
let age = prompt('enter your age');
if (age > 17) {
    alert('Welcome ' + nameValue);
} else {
    alert('Sorry ' + nameValue + ' access is closed')
};
/*  3 case */
let block = confirm('Do you want to enter a name for block');
if (block) {
    let blockName = prompt('Enter your name block', 'block');
    let element = confirm('Do you want to enter a name for element');
    if (element) {
        let elementName = prompt('Enter your name element', 'element');
        let modifier = confirm('Do you want to enter a name for modifier');
        if (modifier) {
            let modifierName = prompt('Enter your name modifier', 'modifier');
            alert(blockName + '_' + elementName + '_' + modifierName);
        } else {
            alert(blockName + '_' + elementName);
        }
    } else {
        alert(blockName);
    }
} else {
    alert('Block not enter')
};
/* case 4 */
let firstNumber = +prompt('enter first number');
let secundNumber = +prompt('enter second number');
let mathOperation = prompt('Enter math operation (div or plus or mult or minus)');
if (mathOperation == 'div') {
    alert(firstNumber / secundNumber);
} else if (mathOperation == 'plus') {
    alert(firstNumber + secundNumber);
} else if (mathOperation == 'mult') {
    alert(firstNumber * secundNumber);
} else if (mathOperation == 'minus') {
    alert(firstNumber - secundNumber);
} else {
    alert('goodbye')
}