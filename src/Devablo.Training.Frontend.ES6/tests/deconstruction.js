// Testing Deconstruction
test('can deconstruct arrays', () => {
    let [x, y] = [3,2];

    expect(x).toBe(3);
    expect(y).toBe(2);
});

test('can deconstruct assignment swapping variables', () => {
    var a = 1;
    var b = 3;

    [a, b] = [b, a];

    expect(a).toBe(3);
    expect(b).toBe(1);
});

test('can deconstruct objects', () => {
    // Second Example with Object
    let obj = {
            firstName: "Aaron",
            lastName: "Morey"
        };
    let { 
        firstName: firstName, 
        lastName: lastName
    } = obj;

    expect(firstName).toBe("Aaron");
    expect(lastName).toBe("Morey");
});

test('can deconstruct objects with functions', () => {

    let getObject = function() {
        return {
            firstName: "Aaron",
            lastName: "Morey",
            handles: {
                twitter: "tweetme"
            }
        };
    };
    let { 
        firstName: first, 
        lastName: last,
        handles: {twitter:tweetUrl}
    } = getObject();

    expect(first).toBe("Aaron");
    expect(last).toBe("Morey");
    expect(tweetUrl).toBe("tweetme");
});

test('can deconstruct objects with functions params', () => {

    let doWork = function(url, {data, cache}) {
        return data;
    };

    let result = doWork("url", { data: "test", cache: true});

    expect(result).toBe("test");
});