document.addEventListener('DOMContentLoaded', function () {
    const bookButton = document.getElementById('bookButton');
    const clearButton = document.getElementById('clearButton');
    const confirmationModal = document.getElementById('confirmation-modal');
    const closeModalButton = document.getElementById('close-modal');

    bookButton.addEventListener('click', bookAppointment);
    clearButton.addEventListener('click', clearForm);
    closeModalButton.addEventListener('click', closeModal);

    function bookAppointment() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const service = document.getElementById('service').value;
        const comments = document.getElementById('comments').value;

        // Display confirmation modal
        openModal();

        // Redirect to confirmation page after 2 seconds
        setTimeout(() => {
            window.location.replace('confirmation.html');
        }, 2000);

        // You can perform further actions here, such as sending data to a server or updating the UI.
    }

    function clearForm() {
        document.getElementById('booking-form').reset();
    }

    function openModal() {
        confirmationModal.style.display = 'flex';
    }

    function closeModal() {
        confirmationModal.style.display = 'none';
    }
});
