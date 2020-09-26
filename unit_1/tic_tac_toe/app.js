const player = 1;

let player1 = 1;

$('.square').on('click', (e) => {
    let squareSelected = $(this);
    if (player1 === 1) {
        squareSelected.addClass('ex');
        player = 2;
    } else {
        squareSelected.addClass('oh');
        player = 1;
    }
})