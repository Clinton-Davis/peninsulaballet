
function sendMail(contactForm) {
	emailjs
		.send("southpeninsulaballet", "peninsulaballet", {
			from_name: contactForm.name.value,
			from_email: contactForm.emailaddress.value,
			message_request: contactForm.message.value
		})
		.then(
			function(responce) {
				console.log("SUCCESS", responce);
				if (responce.status == 200) {
					
				}
			},
			function(error) {
				console.log("FAILED", error);
			}
		);
	return false;
}