test('can not assign const after initialization', () => {
    
    doWork = function(){
        const MAXSIZE = 10;
        MAXSIZE = 12;

        return MAXSIZE;
    };

    // Will throw a TypeError with const can't be assigned
    expect(() => {doWork()}).toThrowError(TypeError);
});