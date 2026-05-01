class Fruit {
    constructor({ position, imageSrc, point = 0 }) {
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;
        this.point = point;
    }

    draw() {
        context.drawImage(this.image, this.position.x, this.position.y);
    }

    setFruitImage(fruitImage) {
        this.image.src = fruitImage;
    }

    update() {
        this.draw();
    }
}

class Snake {
    constructor({ position, imageSrc, step, tail, maxTail }) {
        this.position = position;
        this.image = new Image();
        // this.image.src = imageSrc;
        this.step = step;
        this.tail = tail;
        this.maxTail = maxTail;
    }

    draw() {
        context.drawImage(this.image, this.position.x, this.position.y);
    }

    setTailExtention() {

    }

    update() {
        this.draw();
    }
}