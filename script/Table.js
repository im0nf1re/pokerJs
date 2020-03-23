class Table {
    constructor(w , h) {
        this.width = w;
        this.height = h;

        this.image = new Image();
        this.image.src = './img/table.jpg';
    }

    image;

    width = 1280;
    height = 720;

    draw(ctx) {
        ctx.drawImage(this.image, 0, 0, this.width, this.height);
    }
}