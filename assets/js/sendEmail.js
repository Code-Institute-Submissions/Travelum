function sendMail(contactForm) {
    emailjs.send("gmail", "code_institute", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.messagesummary.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error)
            })
    return false;
}