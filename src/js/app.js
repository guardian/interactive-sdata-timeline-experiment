const $ = (el, s) => el.querySelector(s);
const $$ = (el, s) => [].slice.apply(el.querySelectorAll(s));


$$(document, 'ul.timeline li .status').forEach(statusElement => {
    statusElement.addEventListener('mouseover', (event) => { event.target.classList.add('hover')});
    
    statusElement.addEventListener('mouseout', (event) => { event.target.classList.remove('hover')});

    statusElement.addEventListener('click', (event) => { 
        const previous = $(document, 'ul.timeline li .status.active');
        if (previous !== null)
            previous.classList.remove('active');
        event.target.classList.add('active');

        const previousCard = $(document, '.card.active');
        if (previousCard !== null)
            previousCard.classList.remove('active');

        const newCard = $(document, ".card[data-id='" + event.target.id + "']");
        if (newCard != null)
            newCard.classList.add('active');

    });

});
