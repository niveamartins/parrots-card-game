let quantityOfCards = Number(prompt("Com quantas cartas você deseja jogar?"));
let selectedCards = [];
let gameCards = [];
let availableCards = [
  "bobrossparrot.gif",
  "explodyparrot.gif",
  "fiestaparrot.gif",
  "metalparrot.gif",
  "revertitparrot.gif",
  "triplesparrot.gif",
  "unicornparrot.gif",
];

while (
  quantityOfCards < 4 ||
  quantityOfCards > 14 ||
  !Number.isInteger(quantityOfCards) ||
  !(quantityOfCards%2 === 0)
) {
  quantityOfCards = Number(
    prompt("Resposta inválida :( \n Com quantas cartas você deseja jogar?")
  );
}

function shuffleCards() {
  availableCards.sort(comparator);
  for (let card = 0; card < (quantityOfCards/2); card++) {
    gameCards.push(availableCards[card]);
    gameCards.push(availableCards[card]);
  }
  gameCards.sort(comparator);

  showingCards();
}

function showingCards() {
  let cardString = "";
  for (let card = 0; card < gameCards.length; card++) {
    cardString =
      cardString +
      '<div class="card" onclick="selectCard(this)">\n<img class="front" src="./src/img/front.png" />\n<img class="back hidden" src="./src/img/' + gameCards[card] + '"/>\n</div>\n';
  }
  document.querySelector(".cards").innerHTML = cardString;
}

function selectCard(card) {
    frontCard = card.querySelector(".front")
    backCard = card.querySelector(".back")

    frontCard.classList.add("hidden")
    backCard.classList.remove("hidden")


}

function comparator() {
  return Math.random() - 0.5;
}

shuffleCards();
