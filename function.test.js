const {
    returnTwo,
    greeting,
    add
} = require(`./function.js`)


describe(`Tesing examples`, () => {
    test(`check the returnTwo`, () => {
        expect(returnTwo()).toBe(2)
    })

    test(`check the greeting`, () => {
        expect(greeting(`James`)).toBe(`Hello, James!`)
        expect(greeting(`Jill`)).toBe(`Hello, Jill!`)
    })

    test(`check the add`, () => {
        expect(add(`1`, `2`)).toBe(3)
        expect(add(5, 9)).toBe(14)
    })

})