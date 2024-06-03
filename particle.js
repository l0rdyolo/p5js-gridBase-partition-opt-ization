class Particle {
    #vel;
    #diameter;
    #radius;
    #color;
    #canMove;

    constructor(grid) {
        this.#diameter = 13;
        this.#radius = this.#diameter / 2;
        this.grid = grid;

        this.pos = {
            x: this.#radius + Math.random() * (canvas.w - this.#diameter),
            y: this.#radius + Math.random() * (canvas.h - this.#diameter)
        };

        this.#vel = {
            x: (Math.random() * 0.06) - 0.03,
            y: (Math.random() * 0.06) - 0.03
        };

        this.#color = map(this.pos.x, 0, canvas.w, 0, 360);

        this.#init();
    }

    #init() {
        this.#canMove = true;
        this.#subscribeToCell();
    }

    #draw() {
        this.#color = map(this.pos.y, 0, canvas.h, 0, 360);

        noStroke();
        fill(this.#color, 100, 50);
        circle(
            this.pos.x,
            this.pos.y,
            this.#diameter
        );
    }

    #subscribeToCell() {
        const cell = this.grid.getCell(this.pos.x, this.pos.y);
        if (cell !== this.currentCell) {
            if (this.currentCell) {
                this.currentCell.unsubscribe(this);
            }
            if (cell) {
                cell.subscribe(this);
            }
            this.currentCell = cell;
        }
    }

    update() {
        this.#draw();
        this.#subscribeToCell();
        if (!this.#canMove) return;

        this.pos.x = this.pos.x + this.#vel.x * deltaTime;
        this.pos.y = this.pos.y + this.#vel.y * deltaTime;

        if (this.pos.x > canvas.w - this.#radius || this.pos.x < this.#radius) {
            this.#vel.x *= -1;
        }
        if (this.pos.y > canvas.h - this.#radius || this.pos.y < this.#radius) {
            this.#vel.y *= -1;
        }
    }
}