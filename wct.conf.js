module.exports = {
  verbose: false,
  plugins: {
    local: {
      browsers: ['chrome', 'firefox']
    },
    sauce: {
      disabled: true
    }
  },
  suites: [
    'test/px-view-test-fixture.html'
  ]
};
