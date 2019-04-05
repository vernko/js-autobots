require('chromedriver');
var webdriver = require('selenium-webdriver');
const {Builder, By, until, Key} = webdriver;
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

    it("Go to copart.com", function() {
        return driver.get("http://www.copart.com");
    });

    it("loop through popular section and print lilnk and text", async function() {
        var popular_array = await driver.findElements(By.xpath("//div[@id='tabTrending']//a"));
        console.log(popular_array.length);
        for (var i=0; i<popular_array.length; i++){
            console.log(await popular_array[i].getText() + " - " + await popular_array[i].getAttribute("href"));
        }
    })
});