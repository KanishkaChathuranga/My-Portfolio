
document.querySelectorAll('header a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



const contactForm = document.getElementById('contact-form');


contactForm.addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    
    console.log('User Inputs:');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    Swal.fire({
        title: "Good job!",
        text: "Thank you for reaching out! Your massage has been received.",
        icon: "success"
      });
    

    
    contactForm.reset();
});
