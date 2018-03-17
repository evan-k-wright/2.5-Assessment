
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

    },

    //Filter Object
        /*uiCHecker1: (browser, selector) => {
        browser
            .expect.element(selector).text.to.contain('Filter Objet')
    },*/
    name: (browser, selector, value) => {
        browser
            .setValue(selector, value)
    },
    filterButton: (browser, selector) => {
        browser
            .click(selector)

    }



}