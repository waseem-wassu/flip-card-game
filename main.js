document.addEventListener('DOMContentLoaded', () => {

    //card option
    const cardArray = [
        {
            name:"cat",
            img:"images/cat.jpeg"
        },
        {
            name:"cat",
            img:"images/cat.jpeg"
        },
        {
            name:"cofee",
            img:"images/coffee.jpg"
        },
        {
            name:"cofee",
            img:"images/coffee.jpg"
        },
        {
            name:"duck",
            img:"images/duck.jpeg"
        },
        {
            name:"duck",
            img:"images/duck.jpeg"
        },
        {
            name:"iceCream",
            img:"images/iceCream.jpeg"
        },
        {
            name:"iceCream",
            img:"images/iceCream.jpeg"
        },
        {
            name:"emoji",
            img:"images/emoji.png"
        },
        {
            name:"emoji",
            img:"images/emoji.png"
        },
        {
            name:"mountain",
            img:"images/mountain.webp"
        },
        {
            name:"mountain",
            img:"images/mountain.webp"
        }
          
    ]

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');

const resultDisplay = document.querySelector('#result')


var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

//create your game board

function createBoard() {

   for(let i=0; i<cardArray.length;i++) {
        var card = document.createElement('img');
        card.setAttribute("src","images/blank.jpg");
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCard);
        grid.appendChild(card);
        
    }
}

//check for matches 

function checkForMatch() {

    var cards = document.querySelectorAll('img');

    const optionOneId = cardsChosenId[0];

    const optionTwoId = cardsChosenId[1];

     if(cardsChosen[0] === cardsChosen[1] ) {

        alert("you found a match");

        cards[optionOneId].setAttribute('src',"images/apple.png");

        cards[optionTwoId].setAttribute('src',"images/apple.png");

        cardsWon.push(cardsChosen);

     } else {

        cards[optionOneId].setAttribute('src',"images/blank.jpg");

        cards[optionTwoId].setAttribute('src',"images/blank.jpg");

        alert("sorry try again")
     }

     cardsChosen = [];

     cardsChosenId = [];
     
     resultDisplay.textContent = cardsWon.length;

     if(cardsWon.length === cardArray.length/2) {

         resultDisplay.textContent = "congratulations you won";
     }

}

//flip your card

function flipCard() {

    var cardId = this.getAttribute('data-id');

    cardsChosen.push(cardArray[cardId].name);

    cardsChosenId.push(cardId);

    this.setAttribute('src',cardArray[cardId].img);

     if(cardsChosen.length === 2) {
         
         setTimeout(checkForMatch,500)
     }
}

createBoard();

});