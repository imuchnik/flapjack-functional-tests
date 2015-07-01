var env = require('./env.js');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {'browserName': 'chrome'},

  //suites: {
  //  homepage: 'tests/e2e/homepage/**/*Spec.js',
  //  search: ['tests/e2e/contact_search/**/*Spec.js']
  //},

  // This can be changed via the command line as:
  // --params.login.user 'ngrocks'
  onPrepare: function() {


    //var folderName = (new Date()).toString().split(' ').splice(1, 4).join(' ');
    //var mkdirp = require('mkdirp');
    //var newFolder = "./reports/" + folderName;
    //require('jasmine-reporters');
    //
    //mkdirp(newFolder, function(err) {
    //  if (err) {
    //    console.error(err);
    //  } else {
    //    jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(newFolder, true, true));
    //  }
    //});
    //jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter('xmloutput', true, true));
    browser.driver.manage().window().setSize(1600, 800);
    browser.ignoreSynchronization = true;
  },

  specs: ['FJ-about-smoke-spec.js']
};
//protractor protractor.conf.js --suite homepage
//npm install jasmine-reporters
//npm install mkdirp

