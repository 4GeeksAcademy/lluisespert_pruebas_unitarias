const sum = (a,b) => {

    return a + b;

};

console.log(sum(7,3));



let oneEuroIs = {

    "JPY": 156.5, // japan yen

    "USD": 1.07, // us dollar

    "GBP": 0.87, // british pound

};

function fromEuroToDollar(euros){

    let dollars = euros * oneEuroIs.USD;

    return dollars;

}

function fromDollarToYen(dollars){

    let euros = dollars / oneEuroIs.USD;

    let yenes = euros * oneEuroIs.JPY;

    return yenes;

}

function fromYenToPound(yenes){

    let euros = yenes / oneEuroIs.JPY;

    let pounds = euros * oneEuroIs.GBP;

    return pounds;

};

module.exports = { sum ,fromDollarToYen, fromEuroToDollar, fromYenToPound };