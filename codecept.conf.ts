exports.config = {
  output: 'reports',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://fanlife.ru/',
      show: true
    }
  },
  include: {
    I: './steps_file',
    homePage: './pages/homePage.ts',
    afishaPage: './pages/AfishaPage.ts',
    searchPage: './pages/SearchPage.ts'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.ts']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: 'tests/*_test.ts',
  name: 'codeceptjs-2024-06'
}