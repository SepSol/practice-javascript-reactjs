// condition ? if true, do this : if false, do this
// if (condition) { do and exit }
// else if (another condition) { do and exit }
// else { if none of the above applied, then do this and exit }

var username = 'sepsol';
var email = 'sr-75@live.com'
var password;

var name = 'sepehr';
var lastname = 'king';



if (username) {
    console.log('username has a value');
} else if (!username) {
    console.log("username doesn't have a value")
}


if (password) {
    console.log('password has a value');
} else if (!password) {
    console.log('password doesn\'t have a value')
}


console.log(' ');


// using if & else if:


if (username) {
    console.log('username exists');
} else if (name === 'sepehr') {
    console.log('name entered correctly');
} else if (lastname !== 'soltanieh') {
    console.log('lastname is not correct');
} else {
    console.log('none of the requirements met');
}


if (!username) {
    console.log('username exists');
} else if (name === 'sepehr') {
    console.log('name entered correctly');
} else if (lastname !== 'soltanieh') {
    console.log('lastname is not correct');
} else {
    console.log('none of the requirements met');
}


if (!username) {
    console.log('username exists');
} else if (name !== 'sepehr') {
    console.log('name entered correctly');
} else if (lastname !== 'soltanieh') {
    console.log('lastname is not correct');
} else {
    console.log('none of the requirements met');
}


if (!username) {
    console.log('username exists');
} else if (name !== 'sepehr') {
    console.log('name entered correctly');
} else if (lastname === 'soltanieh') {
    console.log('lastname is not correct');
} else {
    console.log('none of the requirements met');
}

