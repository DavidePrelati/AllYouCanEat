$(document).ready(function () {
    $('#peopleCarousel').carousel({
        interval: false, 
    });
});
document.querySelectorAll('.select-people').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        const people = this.getAttribute('data-people');
        const price = this.getAttribute('data-price');

        const selection = { people, price };

        localStorage.setItem('peopleSelection', JSON.stringify(selection));

    });
});