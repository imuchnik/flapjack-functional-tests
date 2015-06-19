Quick start:
        
```sh
# Download this repo:
$ git clone git@github.com:imuchnik/flapjack-functional-tests.git && cd flapjack-functional-tests

# Install Protractor (it will also automagically install webdriver-manager):
$ npm install -g protractor

# Download Selenium Server binaries:
$ webdriver-manager update

# Start Selenium Server:
$ webdriver-manager start

# Open a new tab and tell protractor to start testing:
$ protractor conf.js
```

Try editing `FJ-about-smoke-spec.js` and re-running `protractor conf.js`. [Here](http://www.seleniumhq.org/docs/03_webdriver.jsp#locating-ui-elements-webelements) are the different ways to select elements on a page.  [Protractor](http://angular.github.io/protractor/#/) uses Jasmine for its test syntax so check out how to write [expectations](http://jasmine.github.io/2.0/introduction.html#section-Expectations).


###Important note: 

Protractor was created by the Angular team to do end-to-end testing of angular sites. It extends the selenium api and makes certain allowences for angularjs. To make it work correctly with non-angular sites you MUST add the following bit of code in every test suite.
```sh
beforeEach(function() {
    return browser.ignoreSynchronization = true;
  });
  ```
  
  
Enjoy! :relieved:
  
