let userPrompt = require(`readline-sync`);
let userInputWord = false;
let userInputNum = false;
let userInputYesNo = false;
let playerDetails = {};
let dealerDetails = [];
let playerNum = 0;

let deck = [];

const suits = ["of Spades", "of Hearts", "of Diamonds", "of Clubs"];
const num = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

initPlayers();

function initPlayers() {
    userInputNum = userPrompt.question(`How many players would like to play?: `);

    if (userInputNum > 0) {
        for (let i = 0; i < userInputNum; i ++) {
            playerNum += 1;
            
            playerName();
            function playerName() {
                userInputWord = userPrompt.question(`[Player ` + playerNum + `]` + ` Please input your display name: `);
                playerDetails['Player '+ playerNum] =    {name: userInputWord, hand: []};

                if (!userInputWord) {
                    console.log(`Invalid input. Try again.`)
                    playerName();
                } else if (userInputWord == ``) {
                    console.log(`Invalid input. Try again.`)
                    playerName();
                };
            };
        };

        userInputYesNo = userPrompt.question(`Ready to start? [y / n]: `.toLowerCase());

        if (userInputYesNo == 'y') {
            initDeck();
            userInputYesNo = false;
        } else if (userInputYesNo == 'n') {
            console.log(`NOT YET CODED IN`);
        };

    } else if (userInputNum > 7) {
        console.log(`The maximum player count is [7].`)
        initPlayers();
    } else if (!userInputNum) {
        console.log(`Invalid input.`);
        initPlayers();
    } else {
        console.log(`Only numbers are accepted.`)
        initPlayers();
    };
};

function initDeck() {
    for (let x = 0; x < 8; x++) { //8 decks in a shoe
        for (let i = 0; i < num.length; i++) {
            for (let a = 0; a < suits.length; a++) {
                deck.push(num[i] + " " + suits[a]);
            };
        };
    };

    console.log(deck);
    prepareCardShoe(deck);
};

function prepareCardShoe(shuflDeck) {
    let randomPos;
    let randomCard;

    for (x = shuflDeck.length - 1; x > 0; x--) {
        randomPos = Math.floor(Math.random() * (x + 1));
        randomCard = shuflDeck[x];
        shuflDeck[x] = shuflDeck[randomPos];
        shuflDeck[randomPos] = randomCard;
    };

    console.log(deck);
    playGame();
};

function playGame() {
    function dealCards() {
        
    };

    function playerChoice() {

    };

    function dealerHit() {
x
    };
};