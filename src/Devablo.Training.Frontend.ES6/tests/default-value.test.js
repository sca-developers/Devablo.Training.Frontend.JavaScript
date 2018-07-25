// Default Property Assignment
test('can set default values with null', () => {
    
    function doWork(name) {
        return name || "Default";
    }

    let result = doWork(null);
    expect(result).toBe("Default");
});