var navApp = new Vue({
    el: '#nav-app',
    methods: {
        toggleMenu: function () {
            const menu = document.querySelector(".nav");
            const menuToggle = document.querySelector(".navbar-toggle");
            let expanded = menuToggle.getAttribute("aria-expanded");
            expanded = (expanded === "true") ? "false" : "true";
            menu.classList.toggle("open");
            menuToggle.classList.toggle("collapsed");
            menuToggle.setAttribute("aria-expanded", expanded);
        }
    }
})

var contactApp = new Vue({
    el: '#contact-app',
    data: {
        submitted: false,
        name: "",
        email: "",
        message: "",
        nameError: "",
        emailError: "",
        messageError: "",
        formMessage: ""
    },
    methods: {
        checkName: function() {
            if (this.submitted) {
                if (this.name.length === 0) {
                    this.nameError = "Please enter a name!";
                    return false;
                } else {
                    this.nameError = "";
                    return true;
                }
            }
        },
        checkEmail: function() {
            if (this.submitted) {
                const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                if (this.email.length === 0) {
                    this.emailError = "Please enter an email!";
                    return false
                }
                else if (!emailReg.test(this.email)) {
                    this.emailError = "This doesn't appear to be a valid email address";
                    return false;
                } else {
                    this.emailError = "";
                    return true;
                }
            }
        },
        checkMessage: function() {
            if (this.submitted) {
                if (this.message.length === 0) {
                    this.messageError = "Don't forget your message!";
                    return false;
                } else {
                    this.messageError = "";
                    return true;
                }
            }
        },
        sendEmail: function(formdata) {
            const request = new XMLHttpRequest();
            let instance = this;
            request.open("POST", "brandonmail.php", true);
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            request.onreadystatechange = function() {
                if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                    if (request.responseText === "email sent") {
                        instance.formMessage = "Thank you! Your email was sent.";
                        console.log(instance.formMessage);
                    } else {
                        instance.formMessage = "Oops! There was a problem with your submission. Try again later, or just email me at brandon.gregory.1981@gmail.com";
                        console.error("Error: ",request.responseText);
                    }
                }
            };
            request.send(formdata);
        },
        processForm: function() {
            this.submitted = true;
            const nameValid = this.checkName();
            const emailValid = this.checkEmail();
            const messageValid = this.checkMessage();
            if (nameValid && emailValid && messageValid) {
                const encoded_name = encodeURIComponent(this.name);
                const encoded_email = encodeURIComponent(this.email);
                const encoded_message = encodeURIComponent(this.message);
                const formdata = `name=${encoded_name}&email=${encoded_email}&message=${encoded_message}`;
                this.sendEmail(formdata);
            }
        }
    }
})