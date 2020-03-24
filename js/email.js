function sendMail(contactForm) {
	emailjs
		.send("gmail", "peninsulaballet", {
			from_name: contactForm.name.value,
			from_email: contactForm.emailaddress.value,
			last_name: contactForm.name.value
		})
		.then(
			function(responce) {
				if (responce.status == 200) {
					location.href = "index.html";
				}
			},
			function(error) {
				console.log("FAILED", error);
			}
		);
	return false;
}