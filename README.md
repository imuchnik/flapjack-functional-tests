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

Try editing `FJ-about-smoke-spec.js` and re-running `protractor conf.js`. [Here](http://www.seleniumhq.org/docs/03_webdriver.jsp#locating-ui-elements-webelements) are the different ways to select elements on a page.  Protractor uses Jasmine for its test syntax so check out how to write [expectations](http://jasmine.github.io/2.0/introduction.html#section-Expectations).

Enjoy! :relieved:
