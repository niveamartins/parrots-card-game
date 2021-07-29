let quantityOfCards = Number(prompt("Com quantas cartas você deseja jogar?"));

while (
  quantityOfCards < 4 ||
  quantityOfCards > 14 ||
  !Number.isInteger(quantityOfCards)
) {
  quantityOfCards = Number(
    prompt("Resposta inválida :( \n Com quantas cartas você deseja jogar?")
  );
}

let availableCards = [
  "bobrossparrot.gif",
  "explodyparrot.gif",
  "fiestaparrot.gif",
  "metalparrot.gif",
  "revertitparrot.gif",
  "triplesparrot.gif",
  "unicornparrot.gif",
];

let gameCards = []

function shuffleCards() {
    availableCards.sort(comparator)

    for (let card = 0; card < quantityOfCards; card++) {
        gameCards.push(availableCards[card])
        gameCards.push(availableCards[card])
    }

    gameCards.sort(comparator)

    alert(gameCards)
}

function comparator() {
  return Math.random() - 0.5;
}


shuffleCards()