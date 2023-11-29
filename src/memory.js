class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []; // to store cards clicked to compare
    this.pairsClicked = 0; // number of turns
    this.pairsGuessed = 0; // number of pairs guessed
  }

  shuffleCards(cards) {
    if (!this.cards){
      return undefined;
    } else {
      for (let i = this.cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random()*(i+1));
        let currentElement = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = currentElement;
      }
      return cards;
    } 
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    if (card1 == card2) {
      this.pairsGuessed += 1;
      return true
    } else {
      return false
    }
  }

  checkIfFinished() {
    let totalPairs = this.cards.length/2
    if (this.pairsGuessed != totalPairs) {
      return false;
    } else if (this.pairsGuessed == totalPairs){
      return true;
    }
  }
}
