
let colorDiv1 = 'white';
let colorDiv2 = null; 

function cambiarColorDiv1(color) {
    const div1 = document.getElementById('div1');
    div1.style.backgroundColor = color;
    colorDiv1 = color; 
}
function cambiarOCrearDiv2(color) {
    let div2 = document.getElementById('div2');
    if (!div2) {
        div2 = document.createElement('div');
        div2.id = 'div2';
        div2.className = 'colored-div';
        div2.style.width = '200px';
        div2.style.height = '200px';
        div2.style.border = '2px solid black';
        document.body.appendChild(div2);
    }
    div2.style.backgroundColor = color;
    colorDiv2 = color; 
}

document.addEventListener('keydown', function(event) {
    switch (event.key.toLowerCase()) {
        case 'a':
            cambiarColorDiv1('pink');
            break;
        case 's':
            cambiarColorDiv1('orange');
            break;
        case 'd':
            cambiarColorDiv1('lightblue');
            break;
        case 'q':
            cambiarOCrearDiv2('purple');
            break;
        case 'w':
            cambiarOCrearDiv2('gray');
            break;
        case 'e':
            cambiarOCrearDiv2('brown');
            break;
        default:
            break;
    }
});
