
function sendMail(contactForm) {
	emailjs
		.send("southpeninsulaballet", "peninsulaballet", {
			first_name: contactForm.first_name.value,
			last_name: contactForm.last_name.value,
			from_email: contactForm.from_email.value,
			dateOfbirth: contactForm.dateOfbirth.value,
   			age: contactForm.age.value,
   			guardian_name: contactForm.guardian_name.value,
   			contact_number: contactForm.contact_number.value,
   			emergency_number: contactForm.emergency_number.value,
			issues: contactForm.issues.value
		})

		.then(
			function(responce) {
				console.log("SUCCESS", responce);
				if (responce.status === 200) {
					/*location.href = "index.html";*/
				}
			},
			function(error) {
				console.log("FAILED", error);
			}
		);
	return false;
}