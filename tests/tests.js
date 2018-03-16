let functions = require('../sources/functions')
let selectors = require('../sources/selectors')
let data = require('../sources/data')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000/')
    },

    after: browser => {
        browser.end()
    },

//Evens and Odds test
    'uiChecker': browser => {
        functions.uiChecker(browser, selectors.titles)
    },
    'Evens and Odds 1, 2, 3, 4, 5, 6': browser => {
        functions.evensOdd(browser, selectors.inputField, data.values)
        functions.splitButton(browser, selectors.splitButton)


    }
}