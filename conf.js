exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  multiCapabilities: [
    {
      'browserName': 'chrome'
    }
  ],

  onPrepare: function() {
    return browser.ignoreSynchronization = true;
  },

  specs: ['FJ-about-smoke-spec.js']
};
