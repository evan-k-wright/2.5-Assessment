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
        browser.expect.element(selectors.evens).text.to.equal(data.resultsEven)
        browser.expect.element(selectors.odd).text.to.equal(data.resultsOdd)

    },
    /*'uiChecker1' : browser => {
        functions.uiCHecker1(browser, selectors.title1)
        When you expect the app, there are 5 <h4> tags in it. But they don't have a class or name.
        I didn't know how to specify which <h4> tag I wanted.
    }*/
    'name' : browser => {
        functions.name(browser, selectors.nameField, data.value1)
        functions.filterButton(browser, selectors.filterButton)
        browser.expect.element(selectors.filtered).text.to.contain(data.filterResults)
    }, 

}