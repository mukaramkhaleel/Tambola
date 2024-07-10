const express = require('express');
const path = require('path');
const Tambola = require('./src/Tambola');
const Ticket = require('./src/Ticket');

const app = express();
const PORT = 8001;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/validate', (req, res) => {
  const { ticket, numbersAnnounced, pattern } = req.body;
  const ticketObj = new Ticket(ticket);
  const result = Tambola.validateClaim(ticketObj, numbersAnnounced, pattern);
  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
