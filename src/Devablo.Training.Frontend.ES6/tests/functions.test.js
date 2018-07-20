// Default Function Params
test('can set default values with null', () => {
    
    function doWork(name = "Aaron") {
        return name || "Default";
    }

    let result = doWork(null);
    expect(result).toBe("Default");
});
test('can set default values with undefined', () => {
    
    function doWork(name = "Aaron") {
        return name || "Default";
    }
    
    let result = doWork(undefined);
    expect(result).toBe("Aaron");
});

// arguments implicit function params
test('can get implicit arguments from function', () => {
    let sum = function() {
        let result = 0;
        for(let i = 0; i < arguments.length; i++){
            result += arguments[i];
        }

        return result;
    }

    var sumValue = sum(1, 2, 3);

    expect(sumValue).toBe(6);
})

// arguments implicit function params
test('can get rest params arguments from function', () => {
    let calculate = function(name, ...numbers) {
        let result = 0;
        for(let i = 0; i < numbers.length; i++){
            result += numbers[i];
        }
        return {
            name: name || "No Name",
            sum: result
        }
    };

    let {
        name = name,
        sum = sum
    } = calculate("Test", 1, 2, 3);

    expect(name).toBe("Test");
    expect(sum).toBe(6);
})


// Arrow Functions
test('can execute arrow function basic', () => {
    let sum = (x,y) => x + y;

    var result = sum(2,3);
    expect(result).toBe(5);
})

test('can execute arrow function with iterations', () => {
    let numbers = [1,2,3,4];
    let sum = 0;

    numbers.forEach(n => sum += n);
    expect(sum).toBe(10);

    let doubled = numbers.map(n => n * 2);
    expect(doubled).toEqual([2,4,6,8]);
})