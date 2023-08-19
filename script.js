document.addEventListener('DOMContentLoaded', function() {
    const hiringRadio = document.getElementById('hiring');
    const hourlyRateContainer = document.getElementById('hourly-rate-container');
    const hourlyRateInput = document.getElementById('hourly-rate');

    hiringRadio.addEventListener('change', function() {
        hourlyRateContainer.style.display = hiringRadio.checked ? 'block' : 'none';
        if (!hiringRadio.checked) {
            hourlyRateInput.value = ''; 
        }
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        if (!contactForm.checkValidity()) {
           
            event.preventDefault();
            contactForm.reportValidity();
        } else {
            
            console.log('Form submitted with the following data:');
            console.log('Name:', contactForm.name.value);
            console.log('Email:', contactForm.email.value);
            console.log('Address:', contactForm.address.value);
            console.log('City:', contactForm.city.value);
            console.log('Postal Code:', contactForm.postal_code.value);
            console.log('Topic:', contactForm.topic.value);
            console.log('Hourly Rate:', contactForm.hourly_rate.value);
            console.log('Message:', contactForm.message.value);
        }
    });
});
