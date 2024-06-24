const divs = document.querySelectorAll('.colored-div');

divs.forEach(function(div) {
    div.addEventListener('click', function() {
        this.style.backgroundColor = 'black'; 
    });
});
