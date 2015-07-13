describe( 'Beta Contact Page', function() {
  var passedURL = browser.params.base_url;
  var baseURL = passedURL ? passedURL : 'http://beta.consumerfinance.gov/';
  var contactURL = baseURL + 'contact-us/';
  var phoneClass = 'list_link__phone';

  it( 'should properly load in a browser', function(){
    browser.get( contactURL ); // This could be set to a staging server or localhost.
    expect( browser.getTitle() ).toBe( 'Contact us' );
  } );

  it( 'should include the Submit a Complaint phone numbers', function(){
    var phone = element.all( by.partialLinkText( '(2372)' ) );
    var firstPhone = phone.first();
    var secondPhone = phone.last();

    expect( phone.count() ).toEqual( 2 );
    expect( phone.getAttribute( 'class' ) ).toMatch( phoneClass );
    expect( firstPhone.getText() ).toBe( '(855) 411-CFPB (2372)' );
    expect( firstPhone.getAttribute( 'href' ) ).toBe( 'tel:855411237245435' )
    expect( secondPhone.getText() ).toBe( '(855) 729-CFPB (2372) TTY' );
    expect( secondPhone.getAttribute( 'href' ) ).toBe( 'tel:8557292372' );
  } );

// This hasn't been released to beta yet
  xit( 'should link to Submit a Complaint page', function() {
    var complaintLink = element( by.partialLinkText( 'Submit a complaint' ) );

    expect( complaintLink.getText() ).toBeDefined();
    expect( complaintLink.getAttribute( 'href' ) ).toMatch( '/complaint/' );
    expect( complaintLink.getAttribute( 'class' ) ).toMatch( 'jump-link__right' );
  } );

  it( 'should include General Inquiries contact details', function() {
    var GIEmail = element( by.partialLinkText( 'info@consumerfinance.gov' ) );
    var GIPhone = element( by.partialLinkText( '(202) 435-7000' ) );

    expect( GIEmail.getText() ).toBeDefined();
    expect( GIEmail.getAttribute( 'href' ) ).toBe( 'mailto:info@consumerfinance.gov' );
    expect( GIPhone.getText() ).toBeDefined();
    expect( GIPhone.getAttribute( 'href' ) ).toBe( 'tel:2024357000' );
    expect( GIPhone.getAttribute( 'class' ) ).toMatch( phoneClass );
  } );

  it( 'should include 48 individual offices in alpha order', function() {
    var offices = element.all( by.css( '.contact-list article' ) );
    var firstOffice = offices.first().element( by.css( '.expandable_label' ) );
    var lastOffice = offices.last().element( by.css( '.expandable_label' ) );

    expect( offices.count() ).toEqual( 48 );
    expect( firstOffice.getText() ).toMatch( 'Academic Research Council' );
    expect( lastOffice.getText() ).toMatch( 'Your Money, Your Goals Toolkit' );
  } );
} );
