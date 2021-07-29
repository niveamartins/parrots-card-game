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
let numberOfMatchedCards = 0;

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
      '<div class="card" onclick="selectCard(this)">\n<img class="front face" src="./src/img/front.png" />\n<img class="back face" src="./src/img/' +
      gameCards[card] +
      '"/>\n</div>\n';
  }
  document.querySelector(".cards").innerHTML = cardString;
}

function selectCard(card) {
  if (
    selectedCards.length <= 1 &&
    card !== selectedCards[0] &&
    !card.classList.contains("matched")
  ) {
    toggleCard(card);
    selectedCards.push(card);
    numberOfRounds++;
    if (selectedCards.length === 2) {
      verifyCards();
    }
    verifyEndGame();
  }
}

function toggleCard(card) {
  let frontCard = card.querySelector(".front");
  let backCard = card.querySelector(".back");

  if (backCard.style.transform === 'rotateY(0deg)') {
    frontCard.style.transform = 'rotateY(0deg)';
    backCard.style.transform = 'rotateY(180deg)';
  } else {
    backCard.style.transform = 'rotateY(0deg)';
    frontCard.style.transform = 'rotateY(180deg)';
  }
}

function verifyCards() {
  let firstCard = selectedCards[0].querySelector(".back");
  let secondCard = selectedCards[1].querySelector(".back");

  if (firstCard.src !== secondCard.src) {
    unmatchedCards()
  } else {
    matchedCards();
  }

}

function unmatchedCards() {
    setTimeout(() => {
        toggleCard(selectedCards[0]);
        toggleCard(selectedCards[1]);
        selectedCards = []
    }, 1000);   
    
}

function matchedCards() {
  numberOfMatchedCards = numberOfMatchedCards + 2;
  selectedCards[0].classList.add("matched");
  selectedCards[1].classList.add("matched");

  selectedCards = []
}

function verifyEndGame() {
  if (numberOfMatchedCards === gameCards.length) {
    alert("Você ganhou em " + numberOfRounds + " jogadas!");
  }
}

function comparator() {
  return Math.random() - 0.5;
}

shuffleCards();
