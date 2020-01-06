let userPrompt = require(`readline-sync`);
let userInputWord = false;
let userInputNum = false;
let userInputYesNo = false;
let playerDetail = {};

let deck = [];
const num = [
  "Ace",
  "King",
  "Queen",
  "Jack",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2"
];
const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

initPlayers();

function initPlayers() {
    let playerNum = 0;
    userInputNum = userPrompt.question(`How many players would like to play?: `);

    if (userInputNum > 0) {
        for (let i = 0; i < userInputNum; i ++) {
            playerNum += 1;
            
            playerName();
            function playerName() {
                userInputWord = userPrompt.question(`[Player ` + playerNum + `]` + ` Please input your display name: `);
                playerDetail['Player '+ playerNum] = {name: userInputWord, cards: []};

                if (!userInputWord) {
                    console.log(`Invalid input. Try again.`)
                    playerName();
                } else if (userInputWord == ``) {
                    console.log(`Invalid input. Try again.`)
                    playerName();
                };
            };
        };
    
        console.log(playerDetail);
        
        userInputYesNo = userPrompt.question(`Ready to start? [y / n]: `.toLowerCase());
        if (userInputYesNo == 'y'){
            initDeck(); 
        } else if (userInputYesNo == 'n'){
            
        }

    } else if (!userInputNum) {
        console.log(`Invalid input.`);
        initPlayers();
    } else {
        console.log(`Only numbers are accepted.`)
        initPlayers();
    };
};