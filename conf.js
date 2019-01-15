
exports.config = {

    // directConnect: true,
    seleniumAddress: 'http://selenium_server:4444/wd/hub',
    framework: 'jasmine2',
    specs: ['specs/google_search-spec.js'],
    baseUrl: 'https://www.google.com.br',
 
    onPrepare: function(){
        browser.manage().timeouts().implicitlyWait(10000);
        browser.ignoreSynchronization = true;

        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function(png){
                allure.createAttachment('Screenshot', function(){
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            });
        });

        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            spec:{
                displayStacktrace: true,
                displayErrorMessages: true,
                displayFailed: true,
                displayDuration: true
            },
            summary: {
                displayErrorMessages: true,
                displayStacktrace: true,
                displaySuccessful: true,
                displayFailed: true,
                displayDuration:true
            },
            colors: {
                enabled: true
            }
        }));
    },
    capabilities: {
        'browserName': 'chrome'
    }

}
