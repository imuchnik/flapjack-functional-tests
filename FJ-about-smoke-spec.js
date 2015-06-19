describe('The new consumerfinance.gov', function() {

  beforeEach(function() {
    return browser.ignoreSynchronization = true;
  });

  it('should properly load in a browser', function(){
    browser.get('http://beta.consumerfinance.gov/'); // This could be set to a staging server or localhost.
    expect(browser.getTitle()).toBe('Consumer Financial Protection Bureau');
  });

  it('should show the correct phone number', function(){
    browser.get('http://beta.consumerfinance.gov/contact-us');
    var phoneNumber = '(855) 411-CFPB (2372)'
    var phoneElement = element(by.partialLinkText(phoneNumber));
    expect(phoneElement.getText()).toBeDefined();
  });

});
