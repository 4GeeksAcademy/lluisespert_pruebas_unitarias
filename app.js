
//let oneEuroIs = {
  //  "JPY": Number.parseFloat(156.5).toFixed(2), // japan yen
    //"USD": Number.parseFloat(1.07).toFixed(2), // us dollar
    //"GBP": Number.parseFloat(0.87).toFixed(2), // british pound
//}

let JPY = Number.parseFloat(156.5);

let USD = Number.parseFloat(1.07);

let GBP = Number.parseFloat(0.87);

function fromDollarToYen(dollar) {

    let yenes = USD * dollar * JPY; 

    return yenes;
}

function fromEuroToDollar(euros){

    let dolares = USD * euros;

    return dolares;
}

function fromYenToPound(Yen){

    let pound = JPY * Yen * GBP;

    return pound;

}

console.log(fromDollarToYen(15));
console.log(fromEuroToDollar(25));
console.log(fromYenToPound(35));

module.exports = { fromDollarToYen };
module.exports = { fromEuroToDollar };
module.exports = { fromYenToPound };