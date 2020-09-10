
function renderPokerHand(pokerHand) {
        let hand = '';
        for (let index = 0; index < pokerHand.length; index++){
            hand += `
                <img src="./cards/${pokerHand[index].value}${pokerHand[index].suit}.png" style="width: 100px; height: auto;" class="mr-1">
            `
        }

    return `
        <div class="text-center mt-5">
            <div class="d-flex justify-content-center align-items-center">
                ${hand}
            </div>
        </div>
    `
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}