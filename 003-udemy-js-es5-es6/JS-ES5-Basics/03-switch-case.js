// change this number:
var slot = 3;

// switch (for this variable) { if any of these cases happen }
switch (slot) {
    case 1:
        console.log('won one');
        break;
    case 2:
        console.log('won two');
        break;
    case 3:
        console.log('won three');
        break;
    case 4:
        console.log('won four');
        break;
    case 5:
        console.log('won five');
        break;
    default:
        console.log('try again!');
}


console.log(' ');


// without break:

switch (slot) {
    case 1:
        console.log('won one');
    case 2:
        console.log('won two');
    case 3:
        console.log('won three');
    case 4:
        console.log('won four');
    case 5:
        console.log('won five');
    default:
        console.log('try again!');
}