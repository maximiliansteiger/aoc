const { input } = require("./readData");

let arr = input.split("\r\n");

let fiveOfAKindArr = [];
let fourOfAKindArr = [];
let fullHouseArr = [];
let threeOfAKindArr = [];
let twoPairArr = [];
let onePairArr = [];
let highCardArr = [];

arr.forEach((elem) => {
  let cards = elem.split(" ")[0].split("");

  if (checkFiveOfAKind(cards)) {
    fiveOfAKindArr.push(elem);
    return;
  }
  if (checkFourOfAKind(cards)) {
    fourOfAKindArr.push(elem);
    return;
  }
  if (checkFullHouse(cards)) {
    fullHouseArr.push(elem);
    return;
  }

  if (checkThreeOfAKind(cards)) {
    threeOfAKindArr.push(elem);
    return;
  }

  if (checkTwoPair(cards)) {
    twoPairArr.push(elem);
    return;
  }

  if (checkOnePair(cards)) {
    onePairArr.push(elem);
    return;
  }

  highCardArr.push(elem);
});

function checkFiveOfAKind(cards) {
  let tempCards = cards;
  for (let i = 0; i < cards.length; i++) {
    cards = cards.join("").replaceAll("J", cards[i]).split("");
    if (cards.filter((card) => card == cards[i]).length == 5) {
      cards = tempCards;
      return true;
    }
    cards = tempCards;
  }
  return false;
}

function checkFourOfAKind(cards) {
  let tempCards = cards;
  for (let i = 0; i < cards.length; i++) {
    cards = cards.join("").replaceAll("J", cards[i]).split("");
    if (cards.filter((card) => card == cards[i]).length == 4) {
      cards = tempCards;
      return true;
    }
    cards = tempCards;
  }
  return false;
}

function checkFullHouse(cards) {
  let tempCards = cards;
  for (let i = 0; i < cards.length; i++) {
    cards = cards.join("").replaceAll("J", cards[i]).split("");
    if (cards.filter((card) => card == cards[i]).length == 3) {
      let tempCards2 = cards;
      for (let j = 0; j < cards.length; j++) {
        cards = cards.join("").replaceAll("J", cards[j]).split("");
        if (cards.filter((card) => card == cards[j]).length == 2) {
          cards = tempCards;
          return true;
        }
        cards = tempCards2;
      }
    }
    cards = tempCards;
  }
  return false;
}

function checkThreeOfAKind(cards) {
  let tempCards = cards;
  for (let i = 0; i < cards.length; i++) {
    cards = cards.join("").replaceAll("J", cards[i]).split("");
    if (cards.filter((card) => card == cards[i]).length == 3) {
      cards = tempCards;
      return true;
    }
    cards = tempCards;
  }
  return false;
}

function checkTwoPair(cards) {
  let tempCards = cards;
  for (let i = 0; i < cards.length; i++) {
    cards = cards.join("").replaceAll("J", cards[i]).split("");
    if (cards.filter((card) => card == cards[i]).length == 2) {
      let tempCards2 = cards;
      for (let j = 0; j < cards.length; j++) {
        if (
          cards.filter((card) => card == cards[j]).length == 2 &&
          cards[i] != cards[j]
        ) {
          cards = tempCards;
          return true;
        }
        cards = tempCards2;
      }
    }
    cards = tempCards;
  }
  return false;
}

function checkOnePair(cards) {
  let tempCards = cards;
  for (let i = 0; i < cards.length; i++) {
    cards = cards.join("").replaceAll("J", cards[i]).split("");
    if (cards.filter((card) => card == cards[i]).length == 2) {
      cards = tempCards;
      return true;
    }
    cards = tempCards;
  }
  return false;
}

function sortCards(cards) {
  const strength = {
    A: 14,
    K: 13,
    Q: 12,
    T: 10,
    9: 9,
    8: 8,
    7: 7,
    6: 6,
    5: 5,
    4: 4,
    3: 3,
    2: 2,
    J: 1,
  };

  return cards.sort((a, b) => {
    for (let i = 0; i < 5; i++) {
      const comparison = strength[a[i]] - strength[b[i]];
      if (comparison !== 0) {
        return -comparison;
      }
    }
    return 0;
  });
}

let res = [
    ...sortCards(fiveOfAKindArr),
    ...sortCards(fourOfAKindArr),
    ...sortCards(fullHouseArr),
    ...sortCards(threeOfAKindArr),
    ...sortCards(twoPairArr),
    ...sortCards(onePairArr),
    ...sortCards(highCardArr),
  ]
    .reverse()
    .map((elem, i) => +elem.split(" ")[1] * (i + 1))
    .reduce((a, b) => a + b);
  
  console.log(res);
  