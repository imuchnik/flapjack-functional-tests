var env = require('./env.js');


exports.config = {
  framework: 'jasmine2',
 // seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {'browserName': 'chrome'},


  specs: ['FJ-about-smoke-spec.js'],
//
sauceUser: "flapjack",
sauceKey:'2f025b43-99f8-4674-9570-ee5319147cae',
//////suites: {
//  homepage: 'tests/e2e/homepage/**/*Spec.js',
//  search: ['tests/e2e/contact_search/**/*Spec.js']
//},

  onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters');
    var mkdirp = require('mkdirp');
    var SpecReporter = require('jasmine-spec-reporter');
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));

    browser.driver.manage().window().setSize(1600, 800);
    browser.ignoreSynchronization = true;

    var folderName = (new Date()).toString().split(' ').splice(1, 4).join('-');
    var newFolder = "reports/" + folderName;

    mkdirp(newFolder, function( err ) {
        if (err) {
          console.error(err);
        } else {
          var jUnitXmlReporter = new jasmineReporters.JUnitXmlReporter(
            {consolidateAll: true,
              savePath: newFolder,
              filePrefix: 'test-results'}
          );
          jasmine.getEnv().addReporter(jUnitXmlReporter);
        }
      });



  }
}
;
//protractor protractor.conf.js --suite homepage
//npm install jasmine-reporters
//npm install mkdirp

