
  

  
document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            aboutSection.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.2 } 
    );
    observer.observe(aboutSection);
  });
  

  


const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("projectModalTitle");
const modalDescription = document.getElementById("projectModalDescription");
const closeModal = document.querySelector(".close");


document.querySelectorAll(".view-details-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    const card = event.target.closest(".portfolio-card");
    const projectTitle = card.dataset.project;

    
    modalTitle.textContent = projectTitle;
    modalDescription.textContent = `More details about ${projectTitle} go here.`;

    
    modal.style.display = "flex";
  });
});


closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});


window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});





const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;


function updateTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    if (i === index) {
      testimonial.classList.add('active');
    }
  });
}


prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial(currentIndex);
});





document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  progressBars.forEach((bar) => {
    const width = bar.style.width; 
    bar.style.width = "0"; 
    setTimeout(() => {
      bar.style.width = width; 
    }, 300);
  });
});






document.querySelector('.cta-button').addEventListener('click', (event) => {
  event.preventDefault();
  const target = document.querySelector('#contact');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});






document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  
  if (name && email && message) {
    Swal.fire({
      title: "Good job!",
      text: "Your massage has been sent",
      icon: "success"
    });
    // Clear form fields
    document.getElementById('contact-form').reset();
  } else {
    Swal.fire({
      title: "incorrect",
      text: "please fill out all fields",
      icon: "Fail"
    });
  }
});



