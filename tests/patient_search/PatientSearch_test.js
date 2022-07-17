module.exports = {
    disabled: true,
  'Patient Search' : function (client) {
      var patient_search = client.page.PatientSearch_pages();
      
      patient_search
        .openUrl()
        .enterPatientName('Brown')
        .selectGender()
        .enterDateOfBirth('07/10/1965')
        .selectLocality()
        .checkResult('BILL')
        .endTest()
  }
};