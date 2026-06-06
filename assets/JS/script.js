// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.


const header = document.querySelector('#site-header');
const hero = document.querySelector('.hero');


window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrollato');
        hero.classList.add('scrollatoHero');
    } else {
        header.classList.remove('scrollato');
        hero.classList.remove('scrollatoHero');
    }
});