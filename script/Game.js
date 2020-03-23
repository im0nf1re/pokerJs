let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
let table = new Table(canvas.offsetWidth, canvas.offsetHeight);


draw();

function draw() {
    table.draw(ctx);
    return requestAnimationFrame(draw);
}

