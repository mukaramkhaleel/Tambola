function validateClaim(ticket, numbersAnnounced, claim) {
  const topRow = ticket.ticket[0];
  const middleRow = ticket.ticket[1];
  const bottomRow = ticket.ticket[2];

  function isNumberCrossed(number, announced) {
      return number !== null && announced.includes(number);
  }

  function isRowCrossed(row, announced) {
      return row.every(num => num === null || isNumberCrossed(num, announced));
  }

  function earlyFiveCrossed(ticket, announced) {
      let count = 0;
      for (let row of ticket.ticket) {
          for (let num of row) {
              if (num !== null && isNumberCrossed(num, announced)) {
                  count++;
              }
              if (count === 5) {
                  return true;
              }
          }
      }
      return false;
  }

  const lastNumberAnnounced = numbersAnnounced[numbersAnnounced.length - 1];
  console.log(`Last number announced: ${lastNumberAnnounced}`);

  if (claim === "Top Row") {
      console.log(`Top row: ${topRow}`);
      if (isRowCrossed(topRow, numbersAnnounced) && topRow.some(num => num === lastNumberAnnounced)) {
          return "Accepted";
      }
  } else if (claim === "Middle Row") {
      console.log(`Middle row: ${middleRow}`);
      if (isRowCrossed(middleRow, numbersAnnounced) && middleRow.some(num => num === lastNumberAnnounced)) {
          return "Accepted";
      }
  } else if (claim === "Bottom Row") {
      console.log(`Bottom row: ${bottomRow}`);
      if (isRowCrossed(bottomRow, numbersAnnounced) && bottomRow.some(num => num === lastNumberAnnounced)) {
          return "Accepted";
      }
  } else if (claim === "Full House") {
      const allNumbers = ticket.ticket.flat().filter(num => num !== null);
      console.log(`All numbers: ${allNumbers}`);
      if (allNumbers.every(num => isNumberCrossed(num, numbersAnnounced)) && isNumberCrossed(lastNumberAnnounced, numbersAnnounced)) {
          return "Accepted";
      }
  } else if (claim === "Early Five") {
      if (earlyFiveCrossed(ticket, numbersAnnounced)) {
          return "Accepted";
      }
  }

  return "Rejected";
}

module.exports = { validateClaim };
