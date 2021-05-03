/* jshint esversion: 6 */
/* globals $:false */

// Emailjs API 
// Code as per API docs & Code Institute course content

function sendMail(contactForm) {
    emailjs.send("service_ejj79op", "template_wdoe52r", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "message": contactForm.message.value
        })
        .then(
            function (response) {
                let successHeading = document.getElementById('exampleModalLabel');
                successHeading.innerHTML = `Success!`;
                let successMessage = document.getElementById('myModalText');
                successMessage.innerHTML =
                    `<p>Your message has been sent. Thank you for getting in touch!</p>
                    `;
                $('#exampleModal').modal('show'); // code from Bootstrap modal docs
                console.log("Success!", response);
                document.getElementById('my-contact-form').reset();
            },
            function (error) {
                let successHeading = document.getElementById('exampleModalLabel');
                successHeading.innerHTML = `Oops!`;
                let successMessage = document.getElementById('myModalText');
                successMessage.innerHTML =
                    `<p>Something went wrong, please try again later!</p>
                    `;
                $('#exampleModal').modal('show'); // code from Bootstrap modal docs
                console.log("Failed!", error);
            });
    return false;
}