const form = document.getElementById('whatsapp-form');
const countryCodeSelect = document.getElementById('country-code');
const phoneNumberInput = document.getElementById('phone-number');
const messageInput = document.getElementById('message');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const countryCode = countryCodeSelect.value;
  const phoneNumber = phoneNumberInput.value.trim();
  const message = messageInput.value.trim();

  if (phoneNumber.length!== 10) {
    alert('Please enter a valid phone number (10 digits)');
    return;
  }

  const url = `https://api.whatsapp.com/send/?phone=${countryCode}${phoneNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=`;
  window.open(url, '_blank');
});