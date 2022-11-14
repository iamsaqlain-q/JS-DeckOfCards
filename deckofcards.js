const suit = ["Clubs", "Diamond", "Hearts", "Spaces"];
const rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]

function cards() {
    let rankL = rank.length;
    let suitL = suit.length;
    let card = [];

    for (let i = 0; i < rankL; i++) {
        for (let j = 0; j < suitL; j++) {
            card[suitL * i + j] = rank[i] + " of " + suit[j];
        }
    }

    let n = suitL * rankL;
    let temp = " ";

    for (let i = 0; i < n; i++) {
        let r = parseInt(Math.random() * (n - i));
        temp = card[r];
        card[r] = card[i];
        card[i] = temp;
    }
    for (let l = 1; l <= 4; l++) {
        console.log('\n Player ', l);
        for (let m = 0; m < 9; m++) {
            console.log(card[m]);
        }
    }
}
cards();