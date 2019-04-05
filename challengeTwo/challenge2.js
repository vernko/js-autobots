require('chromedriver');
var webdriver = require('selenium-webdriver');
const {Builder, By, until, Key} = require('selenium-webdriver');
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

    it("I open the copart website", function() {
        return driver.get("http://www.copart.com");
    });
 
    it("The title is 'Auto Auction - Copart USA'", async function() {
        var title = await driver.getTitle();
        return assert.include(title, "Auto Auction - Copart USA");
    });

    it("Run a search for exotics", async function() {
        var element = await driver.findElement(By.id("input-search"));
        return element.sendKeys("exotics" + Key.ENTER)
    });

    it("Assert that Porsche is in the list of results", async function() {
        var element = await driver.wait(until.titleContains('Porsche', 1000));
        console.log(element.getTitle());
        var html = await driver.findElement(By.xpath("//table[@id='serverSideTable'contains(text(), 'PORSCHE')]"));
        console.log(html);
        return assert.include(html, "Porsche");
    });
});