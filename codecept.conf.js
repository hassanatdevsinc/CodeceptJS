const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*/*_test.js',
  output: './output',
  mocha: {
    reporterOptions: {
        reportDir: "output"
    }
  },
  helpers: {
    Puppeteer: {
      url: '',
      show: false,
      windowSize: '1200x900'
    },
    ChaiWrapper: {
      require: "codeceptjs-chai"
    },
    REST: {
      endpoint: 'https://6151ff8e4a5f22001701d590.mockapi.io/',
      onRequest: (request) => {
        request.headers.auth = '123';
    }
  }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJS',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
