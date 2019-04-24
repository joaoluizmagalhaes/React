const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two number', () => {
    const result = add(4, 3);

    expect(result).toBe(7);

    // if(result !== 7) {
    //     throw new Error(`You add 4 and 3. The result was ${result}. Expected 7`)
    // }
});

test('should generate a greeting message', () => {
    const result = generateGreeting('Joao');

    expect(result).toBe('Hello Joao!');

});

test('should generate a greeting for no name', () => {
    const result = generateGreeting();

    expect(result).toBe('Hello Anonymous!');

});