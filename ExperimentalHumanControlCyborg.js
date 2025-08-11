document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('loginContainer');
    const formContainer = document.getElementById('formContainer');
    const loginForm = document.getElementById('loginForm');
    const studentForm = document.getElementById('studentForm');
    const responseMessage = document.getElementById('responseMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'shihab' && password === '427586') {
            loginContainer.classList.add('hidden');
            formContainer.classList.remove('hidden');
        } else {
            alert('Invalid username or password.');
        }
    });

    // --- Form Submission Logic ---
    studentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // IMPORTANT: Replace with your actual Google Apps Script Web App URL
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwkNFRH87_Jgq9jAupFx4qjvnvO07pHtrbIyHbfiMS798ZgA61gyTYsrbq2d_GQ8688PQ/exec';
        const formData = new FormData(studentForm);

        responseMessage.textContent = 'Submitting, please wait...';
        responseMessage.style.color = '#333';

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                if (response.ok) {
                    responseMessage.textContent = 'Success! Information submitted to the database.';
                    responseMessage.style.color = 'green';
                    studentForm.reset();
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .catch(error => {
                responseMessage.textContent = 'Error! Could not submit. Please try again.';
                responseMessage.style.color = 'red';
                console.error('Error!', error.message);
            })
            .finally(() => {
                setTimeout(() => {
                    responseMessage.textContent = ''; // Clear message after a few seconds
                }, 5000);
            });
    });

});
