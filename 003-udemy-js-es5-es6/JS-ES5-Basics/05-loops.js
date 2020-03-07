function lineBreak () { console.log(' '); }

//
console.log('=================================');
console.log('             FOR LOOPS           ');
console.log('=================================');
//

var index = 0;

if (index < 5) {
    index++;
    console.log('the iteration number is ' + index);
}

lineBreak();

// for (start; end/until; step/increment) { }
for (index = 1; index < 5; index++) {
    console.log('the iteration number is ' + index);
    break;
}

lineBreak();

for (index = 1; index < 5; index++) {
    console.log('the iteration number is ' + index);
}

console.log('---------------------------------');

// === FOR + FOR === //
for (var firstIndex = 1; firstIndex <=3; firstIndex++) {
    for (var secondIndex = 3; secondIndex >= 1; secondIndex--) {
        console.log(firstIndex + ' ' + secondIndex);
    }
}

lineBreak();

// === FOR + IF (BREAK) === //
for (i = 1; i <= 5; i++) {
    //console.log('iteration num: ' + i);
    if (i == 3) {
        break;      // jumps out of the loop
    }
    console.log('iteration num: ' + i);
}

lineBreak();

// === FOR + IF (CONTINUE) === //
for (i = 1; i <= 5; i++) {
    //console.log('iteration num: ' + i);
    if (i == 3) {
        continue;   // jumps over one iteration in the loop
    }
    console.log('iteration num: ' + i);
}

lineBreak();

// === FOR + ARRAYS === //
var array = ['string', 1180, false];
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}


//
console.log('=================================');
console.log('            WHILE LOOPS          ');
console.log('=================================');
//

index = 1;

// while (condition) { do }
while (index < 5) {
    console.log('the iteration number is ' + index);
    index++;
}

console.log('---------------------------------');

// === WHILE + IF === //
var logged = true;
var i = 0;

while (logged) {
    if(i == 3) {
        logged = false;
        var message = true;
    }
    console.log(i);
    i++
    
    if(message == true) {
        console.log('logged out');
    }
}


//
console.log('=================================');
console.log('        DO - WHILE LOOPS         ');
console.log('=================================');
//

index = 1;

// do { this } while (condition);
do {
    console.log('the iteration number is ' + index);
    index++;
} while (index < 5);
