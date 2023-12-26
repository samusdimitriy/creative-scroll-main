let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      break;
    default:
      count--;
      break;
  }
  return `${count} ${count > 0 ? "Bet" : "Hold"}`;
  // Only change code above this line
}

cc(2); //
cc(2); //
cc(4); // какой результат?
