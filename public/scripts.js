document.getElementById('tambolaForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const ticketInput = document.getElementById('ticket').value.trim();
  const numbersAnnouncedInput = document.getElementById('numbersAnnounced').value.trim();
  const pattern = document.getElementById('pattern').value;

  const ticket = ticketInput.split('\n').map(row => row.split(',').map(num => num.trim()));
  const numbersAnnounced = numbersAnnouncedInput.split(',').map(num => parseInt(num.trim()));

  fetch('/validate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ticket, numbersAnnounced, pattern })
  })
  .then(response => response.json())
  .then(data => {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = data.result ? 'Accepted' : 'Rejected';
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

