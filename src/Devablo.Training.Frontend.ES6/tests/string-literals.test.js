// string literals
test('can use template literal', () => {
    let doWork = function(name) {
        return `Hello ${name}`;
    };

    let result = doWork("Aaron");

    expect(result).toBe("Hello Aaron");
})

test('can use template literal spanning multiple lines', () => {
    const html = `
    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
    </body>
    </html>`;

    expect(html).not.toBeNull();
})