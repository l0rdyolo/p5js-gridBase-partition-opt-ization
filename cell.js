class Cell {
    #maxParticleDistance;
    constructor(i, j, w, h) {
        this.x = i * w;
        this.y = j * h;
        this.w = w;
        this.h = h;
        this.#maxParticleDistance = 50;

        this.particles = new Set();
    }

    draw() {
        ////commented code bellow drawing cells box

        // push()
        //     noFill()
        //     stroke(0,100,50)
        //     strokeWeight(5)
        //     rect(this.x,this.y,this.w,this.h)
        // pop();
        this.#connectParticles();
    }

    subscribe(particle) {
        this.particles.add(particle);
    }

    unsubscribe(particle) {
        this.particles.delete(particle);
    }

    #connectParticles() {
        const particlesArray = Array.from(this.particles);
        for (let a = 0; a < particlesArray.length; a++) {
            const _a = particlesArray[a];
            for (let b = a + 1; b < particlesArray.length; b++) {
                const _b = particlesArray[b];
                const dx = _a.pos.x - _b.pos.x;
                const dy = _a.pos.y - _b.pos.y;
                const distance = Math.hypot(dx, dy);
                if (distance < this.#maxParticleDistance) {
                    const alpha = 1 - (distance / this.#maxParticleDistance);
                    stroke(255, 255, 255, alpha);
                    strokeWeight(2);
                    line(_a.pos.x, _a.pos.y, _b.pos.x, _b.pos.y);
                }
            }
        }
    }
}
