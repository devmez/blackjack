let userPrompt = require(`readline-sync`);
let userInputWord = false;
let userInputNum = false;
let userInputYesNo = false;
let playerDetail = {};
let playerNum = 0;

let deck = [];
let shuffledDeck = 

const suits = ["of Spades", "of Hearts", "of Diamonds", "of Clubs"];
const num = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"];

initPlayers();

function initPlayers() {
    userInputNum = userPrompt.question(`How many players would like to play?: `);

    if (userInputNum > 0) {
        for (let i = 0; i < userInputNum; i ++) {
            playerNum += 1;
            
            playerName();
            function playerName() {
                userInputWord = userPrompt.question(`[Player ` + playerNum + `]` + ` Please input your display name: `);
                playerDetail['Player '+ playerNum] = {name: userInputWord, hand: []};

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

    } else if (!userInputNum) {
        console.log(`Invalid input.`);
        initPlayers();
    } else {
        console.log(`Only numbers are accepted.`)
        initPlayers();
    };
};

function initDeck() {
    for (let i = 0; i < num.length; i++) {
        for (let a = 0; a < suits.length; a++) {
            deck.push(num[i] + " " + suits[a]);
        };
    };

    prepareCardShoe(deck);
};

function prepareCardShoe(shuflDeck) {
    let randomPos;
    let card;

    for (x = shuflDeck.length - 1; x > 0; x --) {
        randomPos = Math.floor(Math.random() * (x + 1));
        card = shuflDeck[x];
        shuflDeck[x] = shuflDeck[randomPos];
        shuflDeck[randomPos] = card;
    };

    return shuflDeck;
};

function initGame() {
    
}