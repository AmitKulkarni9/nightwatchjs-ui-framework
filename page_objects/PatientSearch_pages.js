var patientSearchCommands = {
  pause: function(time) {
      this
      .api.pause(time)
      return this
  },
  openUrl: function(){
      this
      .api.url(this.api.launchUrl)
      .maximizeWindow()
      return this
  },
  enterPatientName: function(name) {
      this
      .waitForElementPresent('@searchBox', 5000)
      .setValue('@searchBox',name)
      return this
  },
  selectGender: function() {
      this
      .click('@gender')
      .pause(2000)
      .click('@genderSelect')
      return this
  },
  enterDateOfBirth: function(doB) {
      this
      .click('@dateOfBirth')
      .setValue('@date',doB)
      return this
  },
  selectLocality: function() {
      this
      .click('@locality')
      .setValue('@selectLocalities','Leeming')
      .pause(2000)
      .waitForElementPresent('@selectLocality', 5000)
      .click('@selectLocality')
      .pause(2000)
      return this
  },
  endTest: function(){
      this
      .api.end()
      return this
  },
  checkResult: function(result){
      this
      .expect.element('@result').text.to.equal(result)
      return this
  }
};

module.exports = {
      //url: 'http://localhost:8080/search',//https://communicare-thealth-dev.azurewebsites.net/search
      commands: [patientSearchCommands],
      elements: {
          searchBox: {
              selector: "//*[@id='query']",
              locateStrategy: 'xpath'
          },
          gender: {
              selector: "//div[contains(text(),'Gender')]",
              locateStrategy: 'xpath'
          },
          genderSelect: "div.PatientSearchFilters__checkBox___AcVUa >input[type=\"checkbox\"]",
          dateOfBirth: {
              selector: "//div[contains(text(),'Date of Birth')]",
              locateStrategy: 'xpath'
          },
          date: "*[id^='undefined-ddmmyyyy-undefined']",
          locality: {
              selector: "//div[contains(text(),'Localities')]",
              locateStrategy: 'xpath'
          },
          selectLocalities: "*[id^='undefined-SelectLocalities-undefined']",
          selectLocality: "span[type=\"button\"] > div > div > div",
          result: "div.ResultItem__resultRow___pJWsW > div.ColumnWidths__givenName___11HTM"
      }      
};
    