// NAV MENU 
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

if (menu && navbar) {
  menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  };
  window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  };
}

// IMAGE SWAP (only if those elements exist on this page)
document.querySelectorAll('.image-slider img').forEach(img => {
  img.onclick = () => {
    const main = document.querySelector('.main-home-image');
    if (main) main.src = img.getAttribute('src');
  };
});
// booking part

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



