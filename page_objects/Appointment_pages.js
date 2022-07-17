var appointmentCommands = {
  integer:wait = 20000, 
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
  goToView: function(view){
      this
      .waitForElementPresent('@appTab', wait)
      .click('@appTab')
      if (view == 'day') {
          return this
      }
      else {
          this
          .click('@selectWeek')
          return this
      }
  },
  selectProvider: function(){
      this
      .waitForElementPresent('@prov1',wait)
      .click('@prov1')
      .waitForElementPresent('@prov2',wait)
      .click('@prov2')
      return this
  },
  selectDate: function(){
      this
      .click('@calendar')
      .waitForElementPresent('@dateSelect', wait)
      .pause(2000)
      .click('@dateSelect')
      .click('@dateOkBtn')
      .pause(3000)
      return this  
  },
  selectAppointmentSlot: function(view){
      if (view == 'day') {
          this
          .waitForElementPresent('@appSlotDay', wait)
          .moveToElement('@appSlotDay',10,10)
          .click('@appSlotDay')
          return this
      }
      else {
      this
          .waitForElementPresent('@appSlot', wait)
          .moveToElement('@appSlot',10,10)
          .click('@appSlot')
          return this
      }
  },
  selectPatient: function(name){
      this
      .waitForElementPresent('@patient', wait)
      .setValue('@patient', name)
      .waitForElementPresent('@selectPatient', wait)
      .click('@selectPatient')
      return this
  },
  addAppointmentNote: function(note){
      this
      .pause(2000)
      .setValue('@appNote', note)
      .pause(1000)
      return this
  },
  addVisitReason: function(){
      this
      .click('@visitReason')
      .waitForElementPresent('@selectVisitReason', wait)
      .pause(1000)
      .click('@selectVisitReason')
      return this
  },
  addRequirements: function(){
      this
      .waitForElementPresent('@visitReq', wait)
      .click('@visitReq')
      .pause(1000)
      .waitForElementPresent('@selectVisitReq', wait)
      .click('@selectVisitReq')
      return this
  },
  saveAndClose: function(){
      this
      .pause(1000)
      .waitForElementPresent('@appSave', wait)
      .click('@appSave')
      .pause(5000)
      .waitForElementPresent('@appClose', wait)
      .click('@appClose')
      .pause(1000)
      return this
  },
  endTest: function(){
      this
      .api.end()
      return this
  },
  checkResult: function(view,result){
      if (view == 'day') {
          this
          .expect.element('@bookedAppDay').text.to.equal(result)
          return this
      }
      else {
          this
          .expect.element('@bookedApp').text.to.equal(result)
          return this
      }
  },
  bookAppointment: function(view,patient_name,note) {
      this
      .goToView(view)
      .selectProvider()
      .selectDate()
      .selectAppointmentSlot(view)        
      .selectPatient(patient_name)
      .addVisitReason()
      .addAppointmentNote(note)
      .saveAndClose()
      .checkResult(view,patient_name)
      return this
  },
  editAppt: function() {
      this
      .waitForElementPresent('@bookedAppDay', wait)
      .click('@bookedAppDay')
      .waitForElementPresent('@editApp', wait)
      .click('@editApp')
      return this
  },
  editNote: function(note){
      this
      .pause(2000)
      .setValue('@editNote', note)
      .pause(1000)
      return this
  },
}

module.exports = {
      //url: 'http://localhost:8080/search',
      commands: [appointmentCommands],
      elements: {
          appTab: {
              selector: '//a[@href="/appointments"]',
              locateStrategy: 'xpath'
          },
          selectWeek: {
              selector: '//button[contains(@data-route,"/appointments/week")]',
              locateStrategy: 'xpath'
          },
          prov1: {
              selector: "(//input[@value='on'])[1]",
              locateStrategy: 'xpath'
          },
          prov2: {
              selector: "(//input[@value='on'])[27]",
              locateStrategy: 'xpath'
          },
          calendar: '*[id^="undefined-AppointmentDate-undefined"]',
          dateSelect: {
              selector: '//button/span[contains(.,"30")]',
              locateStrategy: 'xpath'
          },
          dateOkBtn: {
              selector: '//button[@type="button"]/div/span[contains(.,"OK")]',
              locateStrategy: 'xpath'
          },
          appSlot: {
              //selector: "//div[@class='WeekView__container___3Y-8K']//div[@class='WeekView__calendar___21NEN']//div[@class='Column__container___3q5cP']//div[@class='TimeSlots__timeSlot___354Xy']",
              //selector: "//div[@class='TimeSlots__timeSlot___354Xy']",
              //selector: "//div[@data-test-id='timeslot-2016-11-29T09:00:00Z']",
              selector: "//div[@data-test-info='enabled']",
              locateStrategy: 'xpath'
          },
          patient: '*[id^="undefined-Patient-Patient"]',
          selectPatient: 'span[type=\"button\"] > div > div > div',
          appNote: '*[id^="undefined-undefined-Appointmentnote"]',
          appSave: {
              selector: '//span[contains(.,"Save")]',
              locateStrategy: 'xpath'
          },
          appClose: {
              selector: '//span[contains(.,"Close")]',
              locateStrategy: 'xpath'
          },
          bookedApp: {
              selector: "//div[@class='WeekView__container___3Y-8K']//div[@class='WeekView__calendar___21NEN']//div[@class='Column__container___3q5cP']//div[@class='Event__event___2P9xG']//div[@class='Event__details___3AfUQ']//div[@class='Event__patientName___3J3fN']",
              locateStrategy: 'xpath'
          },
          visitReason: '*[id^="undefined-Visitreason"]',
          selectVisitReason: "span[type=\"button\"] > div > div > div",
          visitReq: "div.Edit__editArea___Y1pgM > div > input[type=\"checkbox\"]",
          selectVisitReq: "div.styles__innerDiv___61H-j > div > input[type=\"checkbox\"]",
          appSlotDay: {
              selector: "//div[@class='Event__addEventsText___3CKG8']",
              locateStrategy: 'xpath'
          },
          bookedAppDay: {
              selector: "//div[@class='Event__patientName___Gato_']",
              locateStrategy: 'xpath'
          },
          editApp: {
              selector: "//div[@class='View__editButton___2Kw9h']",
              locateStrategy: 'xpath'
          },
          editNote: {
              selector: "//div[@class='Edit__notesArea___2PzoP']",
              locateStrategy: 'xpath'
          }
      }
};
    