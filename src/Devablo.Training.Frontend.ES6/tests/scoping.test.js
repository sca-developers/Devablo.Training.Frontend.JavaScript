var testVarfunc = (flag) => {

    // Passing True will Work due to scoping
    if(flag){
        var x = 1;
    }

    // Undefined due to hoisting
    return x;
}

test('test var scoping using Flag True and expected 1', () => {
  expect(testVarfunc(true)).toBe(1);
});

test('test var scoping using Flag False and expected undefined', () => {
  expect(testVarfunc(false)).toBeUndefined();
});


var testLetfunc = (flag) => {

    // Passing True will Work due to scoping
    if(flag){
        let x = 1;
    }

    // Undefined due to hoisting
    // Throws ReferenceError exception
    return x;
}
test('test Let Scoping using Flag True and expect value', () => {
    // Need to have wrapper for testing ThrowError
    expect(() => {testLetfunc(true)}).toThrowError(ReferenceError);
});

test('test Let Scoping using Flag False and undefined', () => {
    // Need to have wrapper for testing ThrowError
    expect(() => {testLetfunc(false)}).toThrowError(ReferenceError);
});


test('test IIFE scoping', () => {

    func = () => {
        (function () {  // open IIFE
            var tmp = "Hello World";
        }());  // close IIFE
    }

    // Need to have wrapper for testing ThrowError
    expect(() => {tmp}).toThrowError(ReferenceError);
});
