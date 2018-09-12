var testFunc = (flag) => {
    if(flag){
        let x = 1;
        return x;
    }

    let x = 0;
    return x;
}

test('test conditional operator using Flag True and expect 1', () => {
    expect(testFunc(true)).toBe(1);
});
test('test conditional operator using Flag False and expect 0', () => {
    expect(testFunc(false)).toBe(0);
});

test('test Object Is', () => {
    let result = Object.is(1,2);
    
    expect(result).toBe(false);
});