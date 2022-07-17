module.exports = {
    disabled: true,
    'Book appointment in Dayview' : function (client) {
      var dayview_appointment = client.page.Appointment_pages();
      
      dayview_appointment
        .openUrl()
        .goToView('day')
        .selectProvider()
        .selectDate()
        .selectAppointmentSlot('day')        
        .selectPatient('BILL BROWN')
        .addVisitReason()
        .addAppointmentNote('Booking an appointment for Bill Brown in the Available Slot with the Provider')
        .saveAndClose()
        .checkResult('day','BILL BROWN')
        .endTest();
  }
};