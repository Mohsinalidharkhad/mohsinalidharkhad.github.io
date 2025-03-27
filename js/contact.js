// Initialize EmailJS with your public key
(function() {
    emailjs.init("4QqMKHeJXrwM78Epc");
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Get button reference
    const submitButton = this.querySelector('.submit-button');
    
    // Prevent multiple submissions
    if (submitButton.disabled) {
        return;
    }
    
    // Prepare template parameters
    const templateParams = {
        to_name: "Mohsin",
        from_name: name,
        phone: phone,
        message: message
    };

    // Only add email-related fields if email is provided
    if (email) {
        templateParams.reply_to = email;
        templateParams.email = email;
    }

    // First, show loading state
    submitButton.disabled = true;
    submitButton.classList.remove('success', 'error'); // Remove any previous states
    submitButton.classList.add('sending');
    submitButton.innerHTML = 'Sending <span class="spinner"></span>';
    
    try {
        // Send email using EmailJS
        const response = await emailjs.send('service_tiudxf8', 'template_ca1zik9', templateParams);
        console.log("SUCCESS!", response.status, response.text);
        
        // Show success state
        submitButton.classList.remove('sending');
        submitButton.classList.add('success');
        submitButton.innerHTML = 'Message Sent!';
        
        // Reset form
        document.getElementById('contact-form').reset();
        
        // Reset button state after delay
        setTimeout(() => {
            submitButton.innerHTML = 'Send Me a Message';
            submitButton.classList.remove('success');
            submitButton.disabled = false;
        }, 2000);
    } catch (error) {
        console.error("FAILED...", error);
        
        // Show error state
        submitButton.classList.remove('sending');
        submitButton.classList.add('error');
        submitButton.innerHTML = 'Error! Try Again';
        
        // Reset button state after delay
        setTimeout(() => {
            submitButton.innerHTML = 'Send Me a Message';
            submitButton.classList.remove('error');
            submitButton.disabled = false;
        }, 2000);
    }
}); 