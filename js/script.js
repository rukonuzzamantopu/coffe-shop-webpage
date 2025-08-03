let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});

// booking part
// document.getElementById('bookingForm').addEventListener('submit', function(event) {
//     event.preventDefault(); 
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const number = document.getElementById('number').value.trim();
//     const message = document.getElementById('message').value.trim();
//     const formMessage = document.getElementById('formMessage');

//     // Reset previous message
//     formMessage.textContent = '';
//     formMessage.style.color = 'red';

//     // Validate Name (at least 2 characters)
//     if (name.length < 2) {
//         formMessage.textContent = 'Please enter a valid name (at least 2 characters).';
//         return;
//     }

//     // Validate Email (simple regex)
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//         formMessage.textContent = 'Please enter a valid email address.';
//         return;
//     }

//  // Validate Number (digits only, 7 to 15 digits)
//     const numberPattern = /^\d{7,15}$/;
//     if (!numberPattern.test(number)) {
//         formMessage.textContent = 'Please enter a valid phone number (7-15 digits).';
//         return;
//     }



//     // Optional: Validate message length (if you want)
//     if (message.length > 500) {
//         formMessage.textContent = 'Message is too long (max 500 characters).';
//         return;
//     }

//     // If all validation passes
//     formMessage.style.color = 'green';
//     formMessage.textContent = 'Thank you! Your booking request has been received.';

//     // Or clear the form
//     this.reset();
// });


 document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload

  const form = event.target;
  const formData = new FormData(form);

  const newData = {
    name: formData.get('name'),
    email: formData.get('email'),
    number: formData.get('number'),
    startDate: formData.get('startDate'),
    endDate: formData.get('endDate'),
    message: formData.get('message')
  };

  // Step 1: Retrieve existing data or initialize empty array
  let existingData = JSON.parse(localStorage.getItem('bookingFormData')) || [];

  // Step 2: Append the new data
  existingData.push(newData);

  // Step 3: Save back to localStorage
  localStorage.setItem('bookingFormData', JSON.stringify(existingData));

  // Optional: Confirmation
  console.log('Form data added to localStorage array:', newData);

  // Reset form
  form.reset();
});



