module.exports = {
    disabled: true,
    'Book appointment in Weekview' : function (client) {
      var weekview_appointment = client.page.Appointment_pages();
      
      weekview_appointment
        .openUrl()
        .goToView()
        .selectProvider()
        .selectDate()
        .selectAppointmentSlot()        
        .selectPatient('BILL BROWN')
        .addVisitReason()
        .addAppointmentNote('Booking an appointment for Bill Brown in the Available Slot with the Provider')
        .saveAndClose()
        .checkResult('BILL BROWN')
        .endTest();
  }
};