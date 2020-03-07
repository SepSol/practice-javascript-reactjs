var users = ['Raymond', 'George'];
var prices = [20, 12, 5];
var products = ['Potatoes', 'Apples', 'Lemons'];

function priceCond () {
    if (user[0]) {

    }
}

for (var iUsr = 0; iUsr < users.length; iUsr++){
    console.log(users[iUsr] + ' bought:');
    for (var iPro = 0; iPro < products.length; iPro++){
            if(users[iUsr] === users[0] /* or 'Raymond' */){
                console.log('. ' + products[iPro] + ' = $' + (prices[iPro] - 3));
            } else {
                console.log('. ' + products[iPro] + ' = $' + prices[iPro]);    
        }
    }
}