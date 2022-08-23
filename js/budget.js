function getInputVal(id) {
    const input = _(id)
    const inputVal = input.value;
    input.value = '';
    return parseFloat(inputVal);
}

let playersTotalCost
_('calculate-expenses').addEventListener('click', function() {
    const perPlayerCost = getInputVal('per-player');
    playersTotalCost = perPlayerCost * selectedPlayer;

    _('player-expenses').innerText = playersTotalCost;
})

_('calculate-total').addEventListener('click', function() {
    const managerCost = getInputVal('manager-field');
    const coachCost = getInputVal('coach-field');

    const totalBudget = playersTotalCost + managerCost + coachCost;

    _('budget-total').innerText = totalBudget;
    _('player-expenses').innerHTML = 000;
})