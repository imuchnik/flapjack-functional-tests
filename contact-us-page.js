var ContactUsPage = function() {
  var passedURL = browser.params.base_url;
  var baseURL = passedURL ? passedURL : 'http://beta.consumerfinance.gov/';
  var contactURL = baseURL + 'contact-us/';

  this.get = function() {
    browser.get( contactURL );
  };

  this.pageTitle = function() { return browser.getTitle() };
  this.complaintPhone = element.all( by.partialLinkText( '(2372)' ) );
  this.giEmail = element( by.partialLinkText( 'info@consumerfinance.gov' ) );
  this.giPhone = element( by.partialLinkText( '(202) 435-7000' ) );
  this.offices = element.all( by.css( '.contact-list article' ) );
};

module.exports = ContactUsPage;