function sendMail(contactForm) {
  const awnser = "notabot";
  if (contactForm.notBot.value === awnser) {
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
        issues: contactForm.issues.value,
      })

      .then(
        function (responce) {
          if (responce.status === 200) {
            submitForm();
            console.log("SUCCESS", responce);
          }
        },
        function (error) {
          console.error("FAILED", error);
        }
      );
    return false;
  } else {
    alert(
      "You got that a bit wrong, Are you a Bot? if not try again please .."
    );
  }
}

function submitForm() {
  const checkBox = document.getElementById("checkBox");
  const button = checkBox.querySelector("button");
  const mainForm = document.getElementById("mainform");
  button.addEventListener("click", submitForm);
  button.innerText = "Thank you";
  button.removeEventListener("click", submitForm);
  button.disabled = true;
  button.remove.class("ripple-surface");
  mainForm.reset();
}
