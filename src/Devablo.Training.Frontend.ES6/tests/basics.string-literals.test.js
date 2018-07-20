// string literals
test('can get use template literal', () => {
    let doWork = function(name) {
        return `Hello ${name}`;
    };

    let result = doWork("Aaron");

    expect(result).toBe("Hello Aaron");
})