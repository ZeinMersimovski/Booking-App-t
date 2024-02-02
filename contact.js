document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', submitForm);

    function submitForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // For demonstration purposes, you can log the form data to the console
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        // You can perform further actions here, such as sending data to a server or displaying a confirmation message.
    }
});
