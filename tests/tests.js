let functions = require('../sorces/functions')

module.exports = {
    beforeEach : browser => {
    browser.url('http://localhost:3000/')
    },
    
    after : browser => {
        broswer.end()
    }
}