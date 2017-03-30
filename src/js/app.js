const $ = (el, s) => el.querySelector(s);
const $$ = (el, s) => [].slice.apply(el.querySelectorAll(s));

const parentWith = (element, cssClass) => {
    return element.classList.contains(cssClass) ? element : parentWith(element.parentNode, cssClass);
};


$$(document, '#timeline2 .t-year').forEach(element => {
    element.addEventListener('click', (event) => { 
        const previous = $(document, '#timeline2 .t-year.active');
        
        if(previous === null)
            return;

        const newone = parentWith(event.target, 't-year');

        if(previous !== newone) {
            previous.classList.remove('active');
            newone.classList.add('active');
            const quarter = $$(document, '.t-year.active .t-quarter[data-nonempty="true"]')[0];
            /* note for later: check cross-browsers click */
            quarter.click();
        }
    });
});

$$(document, '#timeline2 .t-quarter[data-nonempty="true"]').forEach(element => {
    element.addEventListener('click', (event) => { 
        const previous = $(document, '#timeline2 .t-quarter.active');
        
        if(previous === null)
            return;

        const newone = parentWith(event.target, 't-quarter');

        if(previous !== newone) {
            previous.classList.remove('active');
            newone.classList.add('active');
        }

        const previousEvents = $$(document, '.event.active');
        previousEvents.forEach(e => { e.classList.remove('active'); });

        const newEvents = $$(document, ".event[data-quarter='" + newone.getAttribute('data-quarter') + "']");
        newEvents.forEach(e => { e.classList.add('active'); });

    });
});


$$(document, '#timeline2 span.title').forEach(element => {
    element.addEventListener('click', (event) => { 
        const previous = $(document, '#timeline2 span.title.active');
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
