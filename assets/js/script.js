let divColor = 'green';
document.getElementById('ele1').style.backgroundColor = divColor;
function pintar(event, color) {
    divColor = color;
    event.target.style.backgroundColor = divColor;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function(event) {
    pintar(event, 'yellow');
});