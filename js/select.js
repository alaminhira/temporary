_('players-card-container').addEventListener('click', function(e) {
    const cardBtn = e.target; 
    if (cardBtn.classList.contains('card-btn')) {
        const cardName = cardBtn.parentElement.firstElementChild.textContent;
        selectedPlayer++;

        if (selectedPlayer > 5) return;

        const selectedItem = document.createElement('li');
        selectedItem.classList.add('flex', 'justify-between');

        selectedItem.innerHTML = `
            <span>${selectedPlayer}.</span>
            <span>${cardName}</span>
            `;
        _('selected-v').appendChild(selectedItem);

        cardBtn.setAttribute('disabled', 'true');
        cardBtn.classList.add('disabled:opacity-50');


    } else {
        return;
    }
})