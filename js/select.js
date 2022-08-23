
select('players-card-container').addEventListener('click', function(e) {
    const cardBtn = e.target; 
    // 1. If card button is clicked
    if (cardBtn.classList.contains('card-btn')) {
        // 1.1: Get the player name from the DOM
        const cardName = cardBtn.parentElement.firstElementChild.textContent;

        // 1.2: Store number of selected players 
        selectedPlayer++;

        // 1.3: If number of selected players is greater than 0, alert error message 
        if (selectedPlayer > 5) {
            alert('Five players have already been selected. No more players can be selected.')
            return;
        }

        // 1.4: Create and append selected player item on the DOM
        const selectedItem = document.createElement('li');
        selectedItem.innerHTML = `
            <span class="inline-block w-5">${selectedPlayer}.</span>
            <span>${cardName}</span>
            `;
        select('selected-v').appendChild(selectedItem);

        // 1.5: Disable button once it's clicked
        cardBtn.setAttribute('disabled', 'true');
        cardBtn.classList.add('disabled:opacity-50');

        // 2. If anywhere other than a card button is clicked, return 
    } else {
        return;
    }
})