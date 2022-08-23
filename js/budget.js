// Get Input Value using a function
function getInputVal(id) {
    const input = select(id)
    const inputVal = input.value;
    input.value = '';
    return parseFloat(inputVal);
}

// Validator function: check whether an input is a valid number
function isInputValid(input) {
    return !isNaN(input) && input > 0;
}

let playersTotalCost
select('calculate-expenses').addEventListener('click', function () {
    // 1. Get per player expense

    const perPlayerCost = getInputVal('per-player');
    // 2. If number of selected player is less than one, show an error message

    if (selectedPlayer < 1) {
        alert('Selected player should be atleat 1');
        return;
        
    // 3. When number of selected player is a valid number
    } else if (isInputValid(perPlayerCost)) {

    // 4. Calculate total players expense
        playersTotalCost = perPlayerCost * selectedPlayer;
        select('player-expenses').innerText = playersTotalCost;

    // 5. Show error message when player cost is not a valid number
    } else {
        alert('Per player cost should be a number greater than 0!');
    }
})

select('calculate-total').addEventListener('click', function () {
    // 1. Get the manager and coach expense from the DOM
    const managerCost = getInputVal('manager-field');
    const coachCost = getInputVal('coach-field');

    // 2. If all the input values are valid
    if (
        isInputValid(playersTotalCost) &&
        isInputValid(managerCost) &&
        isInputValid(coachCost)
    ) {

    // 2.1. Calculate total budget
        const totalBudget = playersTotalCost + managerCost + coachCost;
        select('budget-total').innerText = totalBudget;
        select('player-expenses').innerHTML = 000;

    // 3. If one of the input value is invalid
    } else {
        alert('Players expenses and rmanager expense and coach expense must be a number greater than 0!');
    }
})