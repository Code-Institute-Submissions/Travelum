
// Creates email service 
function sendMail(contactForm) {
    emailjs.send("gmail", "code_institute", {
        // values to input in the form
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.messagesummary.value
    })
        .then(
            // Confirms in the console if submit was succesful
            function (response) {
                console.log("SUCCESS", response);
            },
            // Confirms in the console if submit was unsuccesful
            function (error) {
                console.log("FAILED", error)
            })
    // blocks loading a new page
    return false;
}