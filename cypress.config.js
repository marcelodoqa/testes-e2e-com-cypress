const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'va759k',
  //outras configurações...

  e2e: {
    baseUrl: "https://notes-serverless-app.com",
    experimentalSessionSupport: true,
    chromeWebSecurity: false,
    experimentalStudio: true,
    env: {
      viewportWidthBreakpoint: 768
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
