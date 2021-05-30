/*exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
        browserName: 'chrome' // google chrome. If unspecified, by default, the test will be run in chrome
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['spec2.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 300000
  }
};*/
exports.config = {
framework: 'jasmine',
//seleniumAddress: 'http://localhost:4444/wd/hub', (Optional)
specs: ['spec2.js'], // Relative path to the spec file
capabilities: {
browserName: 'chrome' // google chrome. If unspecified, by default, the test will be run in chrome
}
};
