// arguments implicit function params
test('can get use spread operator', () => {
    let calculate = function(a, b, c) {
        return a + b + c;
    };

    let sum = calculate(...[1,2,3]);

    expect(sum).toBe(6);
})