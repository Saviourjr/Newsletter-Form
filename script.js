document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('emailForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Perform validation here if needed
      // For example, check if the email input is valid
      const emailInput = document.getElementById('email');
      const emailValue = emailInput.value;
      if (!validateEmail(emailValue)) {
        document.getElementById('error-message').textContent = 'Please enter a valid email address';
        return;
      }
  
      // Redirect to the external page
      window.location.href = 'success.html'; // Adjust the path if needed
  });
    });
  
    function validateEmail(email) {
      // Simple email validation
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  ;
  
