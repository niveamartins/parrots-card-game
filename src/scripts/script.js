let quantityOfCards = Number(prompt("Com quantas cartas você deseja jogar?"));
let selectedCards = [];
let gameCards = [];
let availableCards = [
  "bobrossparrot.gif",
  "explodyparrot.gif",
  "fiestaparrot.gif",
  "metalparrot.gif",
  "revertitparrot.gif",
  "tripletsparrot.gif",
  "unicornparrot.gif",
];

let numberOfRounds = 0;
let numberOfDiscoveredDuo = 0;

while (
  quantityOfCards < 4 ||
  quantityOfCards > 14 ||
  !Number.isInteger(quantityOfCards) ||
  !(quantityOfCards % 2 === 0)
) {
  quantityOfCards = Number(
    prompt("Resposta inválida :( \n Com quantas cartas você deseja jogar?")
  );
}

function shuffleCards() {
  availableCards.sort(comparator);
  for (let card = 0; card < quantityOfCards / 2; card++) {
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
      '<div class="card" onclick="selectCard(this)">\n<img class="front" src="./src/img/front.png" />\n<img class="back hidden" src="./src/img/' +
      gameCards[card] +
      '"/>\n</div>\n';
  }
  document.querySelector(".cards").innerHTML = cardString;
}

function selectCard(card) {
  toggleCard(card)
  selectedCards.push(card);
  numberOfRounds++;
  if (selectedCards.length === 2) {
    verifyCards();
  }
  verifyEndGame();
}

function toggleCard(card) {
    let frontCard = card.querySelector(".front");
    let backCard = card.querySelector(".back");
  
    frontCard.classList.toggle("hidden");
    backCard.classList.toggle("hidden");
}

function verifyCards() {
  let firstCard = selectedCards[0].querySelector(".back");
  let secondCard = selectedCards[1].querySelector(".back");

  if (firstCard.src !== secondCard.src) {
    unmatchedCards(firstCard, secondCard);
  } else {
    numberOfDiscoveredDuo = numberOfDiscoveredDuo + 2;
  }

  selectedCards = [];
}

function unmatchedCards(firstCard, secondCard) {
  firstCard.classList.toggle("hidden");
  secondCard.classList.toggle("hidden");
  selectedCards[0].querySelector(".front").classList.toggle("hidden");
  selectedCards[1].querySelector(".front").classList.toggle("hidden");
}

function verifyEndGame() {
  if (numberOfDiscoveredDuo === gameCards.length) {
    alert("Você ganhou em " + numberOfRounds + " jogadas!");
  }
}

function comparator() {
  return Math.random() - 0.5;
}

shuffleCards();
