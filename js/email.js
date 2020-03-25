var enrolform = $("form#enrolform");
enrolform.submit(function(event) {
  event.preventDefault();


  var service_id = "default_service";
  var template_id = "peninsulaballet";

  enrolform.find("button").text("Sending...");
  emailjs.sendForm(service_id, template_id, enrolform[0])
    .then(function() {
      alert("Thank You, you enrol form has been Sent. We will get back to you soon.");
      enrolform.find("button").text("Send");
    }, function(err) {
      alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
      enrolform.find("button").text("Send");
    });
  return false;
});
