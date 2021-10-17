
class PersonalDeck{
  constructor() {
    this.drawPile = []
    this.hand = []
    this.discardPile = []
    this.playedCards = []
  }


  createStartingPile() {
    const STARTING_COPPER_CARDS = 7
    const STARTING_ESTATE_CARDS = 3
    console.log('start')
    const coins = ['Copper', 'coin', 1]
    const victoryCards = ['Estate', 'vc', 1]
    for (let i = 1; i <= STARTING_COPPER_CARDS; i++) {
      this.drawPile.push(coins)
    }
    for (let i = 1; i <= STARTING_ESTATE_CARDS; i++) {
      this.drawPile.push(victoryCards)
    }
    this.drawPile = this._shuffleCards(this.drawPile)
  }

  _shuffleCards(cards) {
    let shuffledCards = cards.sort((a, b) => 0.5 - Math.random())
    return shuffledCards
  }

  drawCard() {
    this.hand.push(this.drawPile.pop())
  }

  drawHand() {
    const CARDS_PER_DRAW_HAND = 3
    if (this.drawPile.length < CARDS_PER_DRAW_HAND) {
      this.replinishDrawPile()
    }
    for (let i = 1; i <= CARDS_PER_DRAW_HAND; i++) {
      this.drawCard()
      }
  }

  discard() {
    let discardHand = this.hand.length
    let discardPlayedCards = this.playedCards.length
    for (let i = 1; i <= discardHand; i++) {
      this.discardPile.push(this.hand.pop())
    }
    for (let i = 1; i <= discardPlayedCards; i++) {
      this.discardPile.push(this.playedCards.pop())
    }
  }

  playCards(card_place) {
    this.playedCards.push(this.hand[card_place])
    this.hand.splice(card_place, 1)

  }

  replinishDrawPile(){
    this.discardPile = this._shuffleCards(this.discardPile)
    this.drawPile = this.drawPile.concat(this.discardPile)
    this.discardPile = []
  }



}

module.exports = PersonalDeck
