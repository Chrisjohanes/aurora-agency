const contactForm = document.getElementById('contactForm');
const alertBox = document.getElementById('contactAlert');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    alertBox.className = 'alert alert-success mt-3';
    alertBox.textContent = result.message;
    alertBox.classList.remove('d-none');
    contactForm.reset();
  } catch (err) {
    alertBox.className = 'alert alert-danger mt-3';
    alertBox.textContent = 'Terjadi kesalahan. Coba lagi.';
    alertBox.classList.remove('d-none');
  }
});
