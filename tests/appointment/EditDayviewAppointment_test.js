module.exports = {
    //disabled: true,
    'Edit appointment in Dayview' : function (client) {
      var edit_dayview_appointment = client.page.Appointment_pages();
      
      edit_dayview_appointment
        .openUrl()
        .bookAppointment('day','BILL BROWN','Booking an appointment for patient in the available slot with the Provider')
        .editAppt()
        .addVisitReason()
        //.addRequirements()
        .editNote('Update Booking for Patient')
        .saveAndClose()
        .endTest();
  }
};