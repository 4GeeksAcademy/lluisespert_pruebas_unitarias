


const { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
   
    let total = sum(14, 9);

    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars",  () => {

    const dollars = fromEuroToDollar(3.5).toFixed(2);

    const expected = (3.5 * 1.07).toFixed(2);

    expect(dollars).toBe(expected);
});

test("One dollar should be 145.26 yen",  () => {

    const yenes = fromDollarToYen(10).toFixed(2);

    const expected = ((10 / 1.07) * 156.50).toFixed(2); 

    expect(yenes).toBe(expected); 
});

test("One yen should be 0.0055 pound",  () => {

    const pounds = fromYenToPound(20).toFixed(2);

    const expected = ((20 / 156.5) * 0.87).toFixed(2);

    expect(pounds).toBe(expected); 
});