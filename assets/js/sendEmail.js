function sendMail(contactForm) {
    emailjs.send("service_ejj79op", "template_wdoe52r", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "message": contactForm.message.value
        })
        .then(
            function (response) {
                console.log("Success!", response);
            },
            function (error) {
                console.log("Failed!", error);
            });
    return false;
}