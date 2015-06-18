describe('Linking to a tool', function(){
	beforeEach(function() {
    return browser.ignoreSynchronization = true;
  });

	it('navigate to the page', function(){

	    browser.get('http://beta.consumerfinance.gov/');
		expect(browser.getTitle()).toBe('Consumer Financial Protection Bureau');
	});

	it('should click on something', function(){

       browser.get('http://beta.consumerfinance.gov/contact-us');
       var phoneLink = '411-CFPB'
       var phoneElement = element(by.partialLinkText(phoneLink));

       expect(phoneElement.getText()).toBeDefined();

	});

});
