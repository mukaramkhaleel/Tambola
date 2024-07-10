document.getElementById('claim-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const ticket = document.getElementById('ticket').value.split(',').map(row => row.trim().split(' '));
    const numbersAnnounced = document.getElementById('numbersAnnounced').value.split(',').map(num => parseInt(num.trim()));
    const pattern = document.getElementById('pattern').value;

    const response = await fetch('/validate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ticket, numbersAnnounced, pattern }),
    });

    const data = await response.json();
    document.getElementById('result').innerText = `Result: ${data.result}`;
});
