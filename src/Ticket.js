class Ticket {
  constructor(ticket) {
      this.ticket = ticket.map(row => row.map(num => (num === '_' ? null : parseInt(num))));
  }
}

module.exports = Ticket;
