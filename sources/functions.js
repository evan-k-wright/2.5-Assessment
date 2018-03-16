
module.exports = {


    //Evens and Odds
    evensOdd: (browser, selector, value) => {
        //enter in input values
        browser
            .setValue(selector, value)
    },

    splitButton: (browser, selector) => {
        browser
            .click(selector)
    },

    uiChecker: (browser, selector) => {
        //checking box title
        browser
            .expect.element(selector).text.to.contain('Evens and Odds')

    }
}