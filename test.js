

const { fromDollarToYen } = require ('./app.js');

test('adds 156 * 1.07 * 15 to equal 2511.8250000000003', () => {

    let total = fromDollarToYen(15);

    expect(total).toBe(2511.8250000000003);

});

const { fromEuroToDollar } = require ('./app.js');

test ('25 * 1.07 to equal 26.75', () => {

    let total = fromEuroToDollar(25);

    expect(total).toBe(26.75);

});

const { fromYenToPound } = require ('./app.js');

test ('156.5 * 35 * 0.87 to equal 4765.425', () => {

    let total = fromYenToPound(35);

    expect(total).toBe(4765.425);

});