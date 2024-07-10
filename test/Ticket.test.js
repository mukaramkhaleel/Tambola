const { expect } = require('chai');
const Ticket = require('../src/Ticket');

describe('Ticket', () => {
  let ticket;

  beforeEach(() => {
    ticket = new Ticket([
      [4, 16, '_', '_', 48, '_', 63, 76, '_'],
      [7, '_', 23, 38, '_', 52, '_', '_', 80],
      [9, '_', 25, '_', '_', 56, 64, '_', 83]
    ]);
  });

  it('should return the correct row', () => {
    expect(ticket.getRow(0)).to.deep.equal([4, 16, '_', '_', 48, '_', 63, 76, '_']);
  });

  it('should return all numbers excluding underscores', () => {
    expect(ticket.getAllNumbers()).to.deep.equal([4, 16, 48, 63, 76, 7, 23, 38, 52, 80, 9, 25, 56, 64, 83]);
  });
});

