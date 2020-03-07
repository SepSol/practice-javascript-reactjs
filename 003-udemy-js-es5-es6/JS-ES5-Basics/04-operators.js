// set value (gets):    =
// add or concatenate:  +
// subtract:            -
// multiply:            *
// exponentiation:      **
// divide:              /
// remainder:           %

// add and set:         +=
// subtract and set:    -=
// multiply and set:    *=
// divide and set:      /=
// remainder and set:   %=

// add one:             ++
// subtract one:        --


var num1;
var num2;
var num3;

num1 = 20;
num2 = 15;

var total = num1 + num2
console.log(total);
console.log('the total is: ' + total)
console.log('the total is: ' + num1 + num2);
console.log('the total is: ' + (num1 + num2));
//
console.log(' ');



num1 = 100;
console.log('the old total is: ' + total);
total = num1 + num2;
console.log('the new total is: ' + total);
//
console.log(' ');



num3 = num1 + 5;
console.log(num3);
//
num3 += 5;
console.log(num3);
//
num3++;
console.log(num3);
//
console.log(' ');



num3 = num1 - 5;
console.log(num3);
//
num3 -= 5;
console.log(num3);
//
num3--;
console.log(num3);
//
console.log(' ');



num3 = num1 * 5;
console.log(num3);
//
num3 *= 5;
console.log(num3);
//
console.log(' ');



num3 = num1 ** 3;
console.log(num3);
//
console.log(' ');




num3 = num1 / 5;
console.log(num3);
//
num3 /= 5;
console.log(num3);
//
console.log(' ');



num3 = num1 % 30;
console.log(num3);
//
num3 %= 3;
console.log(num3);
//
console.log(' ');



//
console.log('=================================');
console.log('       MORE ON OPERATORS      ');
console.log('=================================');
//



var string = 'string';

// set value (gets):            =
// almost equal to (equity):    ==      checks 'values' but not 'types'
// exactly equal to (identiry): ===     checks both 'values' and 'types'

console.log('EQUAL TO:');

console.log(2 == 2);
console.log(2 == '2');
console.log(2 === 2);
console.log(2 === '2');
console.log(' ');

console.log(string == 'string');
console.log(string === 'string');
console.log(' ');

// almost not equal to (not equal):      !=
// exactly not equal to (not identical): !==

console.log('NOT EQUAL TO:');

console.log(2 != 2);
console.log(2 != '2');
console.log(2 !== 2);
console.log(2 !== '2');
console.log(' ');

console.log(string != 'string');
console.log(string !== 'string');
console.log(' ');

// greater than:                >
// less than:                   <

console.log('GREATER / LESS THAN:');

console.log(2 > 3);
console.log(2 < 3);
console.log(' ');

// greater than or equal to:    >=
// less than or equal to:       <=

console.log('GREATER / LESS THAN OR EQUAL TO:');

console.log(3 >= 2);
console.log(2 >= 2);
console.log(2 >= 3);
console.log(' ');
console.log(3 <= 2);
console.log(2 <= 2);
console.log(2 <= 3);
console.log(' ');

// and: &&
// or:  ||

console.log('BOOLEAN OPERATORS:');

if (1 == 1) {
    console.log('true');
    if (2 == 2) {
        console.log('this is true as well');
    }
}

console.log(' ');

// make one 1s a string:
if (1 === 1 && 2 == 2) {
    console.log('both statements are true');
} else {
    console.log('one or both of the statements is false');
}

console.log(' ');

if (1 === '1' || 1 == '1') {
    console.log('one of them is true');
}

console.log(' ');

// if ( XXX ) { YYY } else { ZZZ }
//      XXX  ?  YYY    :     ZZZ ;

console.log('TERNARY OPERATOR ?:');

if ( 2 === '2' ) {
    console.log('equal');
} else {
    console.log('not equal');
}

console.log(2 === '2' ? 'equal' : 'not equal');

console.log(' ')

console.log('TYPEOF OPERATOR:');

console.log(typeof "john"); // returns string
console.log(typeof "25");   // returns string
console.log(typeof 25);     // returns number
console.log(typeof "true"); // returns string
console.log(typeof true);   // returns boolean
console.log(typeof undefined); // returns undefined
console.log(typeof null);   // returns object

console.log(' ')
