require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;

describe("challenge suite", function(){
    this.timeout(20000);
    var driver;

    before(function () {
        driver = new webdriver.Builder()
       .withCapabilities(webdriver.Capabilities.chrome())
       .build();
    });

    after(function () {
        return driver.quit();
    });

    it("I open the google website", function() {
        return driver.get("http://www.google.com");
    });
 
    it("The title is 'Google'", function() {
        return driver.getTitle().then(function(title) {
            assert.equal(title, "Google");
        });
    });
    
    it("The title is 'Google'", async function() {
        var title = await driver.getTitle();
        return assert.equal(title, "Google");
    });
 
});