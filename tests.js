const Tambola = require('./src/Tambola');
const Ticket = require('./src/Ticket');

function runTest(ticketData, numbersAnnounced, claim, expected) {
    const ticketObj = new Ticket(ticketData);
    console.log('----------Tambola--------------');
    console.log(`Test Claim: ${claim}`);
    console.log(`Ticket:`, ticketData);
    console.log(`Numbers Announced: ${numbersAnnounced}`);
    console.log(`Expected: ${expected}`);
    const result = Tambola.validateClaim(ticketObj, numbersAnnounced, claim);
    console.log(`Got: ${result}`);
    console.log(result === expected ? 'PASS' : 'FAIL');
}

const tests = [
    {
        ticket: [
            [4, 16, null, null, 48, null, 63, 76, null],
            [7, null, 23, 38, null, 52, null, null, 80],
            [9, null, 25, null, null, 56, 64, null, 83]
        ],
        numbersAnnounced: [90, 4, 46, 63, 89, 16, 76, 48],
        claim: 'Top Row',
        expected: 'Accepted'
    },
    {
        ticket: [
            [4, 16, null, null, 48, null, 63, 76, null],
            [7, 29, 23, 38, null, 52, 11, null, 80],
            [9, null, 25, null, null, 56, 64, null, 83]
        ],
        numbersAnnounced: [7, 29, 23, 38, 52, 11, 80],
        claim: 'Middle Row',
        expected: 'Accepted'
    },
    {
        ticket: [
            [4, 16, null, null, 48, null, 63, 76, null],
            [7, null, 23, 38, null, 52, null, null, 80],
            [9, 18, 25, null, 33, 56, 64, null, 83]
        ],
        numbersAnnounced: [9, 18, 25, 33, 56, 64, 83],
        claim: 'Bottom Row',
        expected: 'Accepted'
    },
    {
        ticket: [
            [4, 16, null, null, 48, null, 63, 76, null],
            [7, 29, 23, 38, null, 52, 11, null, 80],
            [9, 18, 25, 34, 33, 56, 64, 71, 83]
        ],
        numbersAnnounced: [4, 16, 48, 63, 76, 7, 29, 23, 38, 52, 11, 80, 9, 18, 25, 34, 33, 56, 64, 71, 83],
        claim: 'Full House',
        expected: 'Accepted'
    },
    {
        ticket: [
            [4, 16, null, null, 48, null, 63, 76, null],
            [7, null, 23, 38, null, 52, null, null, 80],
            [9, null, 25, null, null, 56, 64, null, 83]
        ],
        numbersAnnounced: [4, 16, 48, 63, 76],
        claim: 'Early Five',
        expected: 'Accepted'
    }
];

tests.forEach(test => runTest(test.ticket, test.numbersAnnounced, test.claim, test.expected));
