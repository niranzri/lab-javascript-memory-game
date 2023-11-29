const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);
memoryGame.shuffleCards(memoryGame.cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });


  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      console.log(`Card clicked: ${card}`)
      if (memoryGame.pickedCards.length < 2) {
        card.classList.add("turned");
        memoryGame.pickedCards.push(card);
      }
      if (memoryGame.pickedCards.length == 2) {
        let card1Name = memoryGame.pickedCards[0].getAttribute("data-card-name");
        let card2Name = memoryGame.pickedCards[1].getAttribute("data-card-name");
        let resultComparison = memoryGame.checkIfPair(card1Name, card2Name);
        if (!resultComparison) {
          setTimeout (() => {
            memoryGame.pickedCards[0].classList.remove("turned");
            memoryGame.pickedCards[1].classList.remove("turned");
            memoryGame.pickedCards.splice(0);
          }, 1000);    
        } else {
            memoryGame.pickedCards.splice(0);
        }
      }
      document.getElementById("pairs-clicked").innerText = memoryGame.pairsClicked;
      document.getElementById("pairs-guessed").innerText = memoryGame.pairsGuessed;
      if (memoryGame.checkIfFinished()){
        setTimeout(() => {
          alert("You won!");
        }, 1000);
      }
    }); 
  });
});
