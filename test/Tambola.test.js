const { expect } = require('chai');
const Tambola = require('../src/Tambola');
const Ticket = require('../src/Ticket');

describe('Tambola', () => {
  let ticket;

  beforeEach(() => {
    ticket = new Ticket([
      [4, 16, '_', '_', 48, '_', 63, 76, '_'],
      [7, '_', 23, 38, '_', 52, '_', '_', 80],
      [9, '_', 25, '_', '_', 56, 64, '_', 83]
    ]);
  });

  it('should accept top row claim', () => {
    const numbersAnnounced = [90, 4, 46, 63, 89, 16, 76, 48];
    expect(Tambola.validateClaim(ticket, numbersAnnounced, 'Top Row')).to.be.true;
  });

  it('should reject top row claim due to late claim', () => {
    const numbersAnnounced = [90, 4, 46, 63, 89, 16, 76, 48, 12];
    expect(Tambola.validateClaim(ticket, numbersAnnounced, 'Top Row')).to.be.false;
  });
  
});

